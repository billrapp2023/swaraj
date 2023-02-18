from flask import Flask,request,jsonify,render_template
import pymysql
import base64
from flaskext.mysql import MySQL
# from flask_api import status


from flask_cors import CORS, cross_origin
from flask_mail import Mail,Message

# password generator *****
import string
import random
# ****************************

app = Flask(__name__)

# cors configuration

cors = CORS(app, resources={r"*": {"origins": "*"}})

# Mail configuration

mail=Mail(app)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = ''
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

# Mysql database configuration

mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'praveen-tequevia'
app.config['MYSQL_DATABASE_DB'] = 'blood'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


# path="/home/praveen/Desktop/Python/GTL/venv/images/";

status_response={"message":"This API returning the following HTTP status"}


# -----------------------------------------------------------------------------------------------------------------------------
# -----------------------------------------------------------------------------------------------------------------------------
# dbInitializer()

#
# -----------------------------------------------------------------------------------------------------------------------------
# -----------------------------------------------------------------------------------------------------------------------------
# MAX FINDER

def maxidFinder(colName,tableName):
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    query="select max("+colName+") as max from "+tableName
    cursor.execute(query)
    row = cursor.fetchone()
    currentMaxId = str(row["max"])
    # currentMaxId=str(currentMaxId)
    if currentMaxId == "None":
        maxId = 1
    else:
        maxId = int(currentMaxId) + 1
    con.close()
    cursor.close()

    return maxId

# -------------------------------------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------------------------------------
# Mail sending
#
# def Mailer(sender,recipient,Subject,body):
#     try:
#         msg=Message(Subject,sender=sender,recipients=[recipient])
#         msg.body=body
#         mail.send(msg)
#         return "sended successfully"
#     except:
#         return "A Error occurred while perform mailing !"


def Mailer(sender,recipient,Subject,body):
    try:
        msg=Message(Subject,sender=sender,recipients=[recipient])
        msg.body=body
        # msg.html = render_template('Mail_Template.html',password=body)
        mail.send(msg)

        return "sended successfully"
    except:
        return "A Error occurred while perform mailing !"



# -------------------------------------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------------------------------------
# Random username/password string generatior

def randomString(stringLength):

    """Generate a random string with the combination of lowercase and uppercase letters """
    # letters = string.ascii_letters
    # return ''.join(random.choice(letters) for i in range(stringLength))

    # """ Generate a random string of letters and digits """    query=""
    # cursor.execute(query)
    lettersAndDigits = string.ascii_letters + string.digits
    return ''.join(random.choice(lettersAndDigits) for i in range(stringLength))

# -------------------------------------------------------------------------------------------------------------------------------
# -------------------------------------------------------------------------------------------------------------------------------

@app.route('/addHospital', methods=['POST'])
def addHospital():

    dataTosave=request.json
    About=dataTosave['About']
    
    Heademail=dataTosave['Heademail']
    HospAddrs=dataTosave['HospAddrs']
    HospCat = dataTosave['HospCat']


    HospHead = dataTosave['HospHead']
    HospLicNum = dataTosave['HospLicNum']
    HospName = dataTosave['HospName']
    HospOwn = dataTosave['HospOwn']
    HospPhNum = dataTosave['HospPhNum']
    HospTel=dataTosave['Telephone']
    YOE = dataTosave['YOE']
    image = dataTosave['image']
    image = image.replace("data:image/jpeg;base64,", "")
    path="/home/praveen/Downloads/blood (1)/src/assets/Uploads/"



    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("rid", "registration")
    password=randomString(12)
    cursor.execute("insert into registration values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (maxId, About,Heademail,HospAddrs,HospCat,HospHead,HospLicNum,HospName,HospOwn,HospPhNum,HospTel,YOE,'./assets/Uploads/'+str(maxId+1000)+".jpg",'','','','','','Hospital','pending'))
    cursor.execute("insert into login values(%s,%s,%s,%s,%s,%s)",(maxidFinder("lid","login"),Heademail,password,"head",'pending',maxId))
    con.commit()

    with open(path + str(maxId + 1000) + ".jpg", "wb") as fh:
        fh.write(base64.b64decode(image))
        
    cursor.close()
    con.close()
    # response=Mailer("avafoundationltd@gmail.com",Heademail,"Your Autogenerated password !",password)
    # print( response)
    return status_response


@app.route('/login',methods=["POST"])
def login():
    dataTosave=request.json
    con=mysql.connect()
    cursor=con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select lid as uId,type from login where Username=%s and password=%s and status='aproved'",(dataTosave["userName"],dataTosave["passWord"]))
    row=cursor.fetchall()
    status_response=jsonify(row)
    cursor.close()
    con.close()
    return status_response

@app.route('/addemployee', methods=['POST'])
def addEmp():

    dataTosave=request.json
    Fname=dataTosave['Fname']
    print( Fname)
    Designtn=dataTosave['Designtn']
    Emailid=dataTosave['Emailid']
    Empid=dataTosave['Empid']
    EmpPhnum = dataTosave['EmpPhnum']

    print( dataTosave)
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("rid", "registration")
    password=randomString(12)
    cursor.execute("insert into registration values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (maxId,'','','','','','','','','','','','',Fname,Designtn,Emailid,Empid,EmpPhnum,'Employee','aproved'))
    cursor.execute("insert into login values(%s,%s,%s,%s,%s,%s)",(maxidFinder("lid","login"),Emailid,password,"staff",'aproved',maxId))
    con.commit()
    cursor.close()
    con.close()
    # response=Mailer("avafoundationltd@gmail.com",Emailid,"Your Autogenerated password !",password)
    # print( response)
    return status_response

@app.route('/adddonor', methods=['POST'])
def adddonor():

    dataTosave=request.json
    Name=dataTosave['DonorName']
    print( Name)
    Gender= dataTosave['DonorGender']
    
    DOB=dataTosave['DonorDOB']
    Address=dataTosave['DonorAddrs']
    
    City=dataTosave['DonorCity']
    State=dataTosave['State']
    Pincode=dataTosave['Pinno']
    Occupation=dataTosave['Occupation']
    DonorBG=dataTosave['DonorBG']   
    DonorPhNum= dataTosave['DonorPhNum']
    DiseaseCheck=dataTosave['Diseasecheck']
    AllergyCheck=dataTosave['Allergycheck']
    OtherAllergies=dataTosave['Otherallergies']
    Std=dataTosave['Std']
    Cardiac=dataTosave['Cardiac']
    Bleeding=dataTosave['Bleeding'] 
    Medication=dataTosave['Medication']
    LastDondatingdate=dataTosave['LastDondate']
    NextDonatingDate=dataTosave['NxtDondate']   
    DonorTime= dataTosave['DonorTime']
    Blood=dataTosave['blood']
    Organ=dataTosave['organ']
    uId=dataTosave['uId']
    print( dataTosave)
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("did", "DonorPersonalInfo")
    
    cursor.execute("insert into DonorPersonalInfo values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (maxId,Name,Gender,DOB,Address,City,State,Pincode,Occupation,DonorBG,DonorPhNum,DiseaseCheck,AllergyCheck,OtherAllergies,Std,Bleeding,Medication,LastDondatingdate,NextDonatingDate,DonorTime,Blood,'',uId))
    cursor.execute("update donation set did=%s where did=1",maxId)
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/forgotPassword', methods=["POST"]) 
def forgotPassword():
    

    dataTosave=request.json
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select password,rid from login where username=%s",(dataTosave["mail"]))
    row=cursor.fetchone()
    password=str(row["password"])
    print( password)
    
    rid=str(row["rid"])
    print( rid)
    if(len(password)>0):
        cursor.execute("select Username from login where rid=%s",rid)
        mail=cursor.fetchone()
        mail=str(mail["Username"])
        print( mail)
        # response=Mailer("avafoundationltd@gmail.com",mail,"Your recovered password !",password)
        # print( response)

    return status_response


@app.route('/getHospitals',methods=["GET"])
def getHospitals():
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)

    cursor.execute("select * from registration where status='pending'")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response


@app.route('/getAprovedHospitals',methods=["GET"])
def getAprovedHospitals():
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)

    cursor.execute("select * from registration where status='aproved'and type='hospital' ")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response



@app.route('/aprove/<id>', methods=['GET'])
def approve(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("update registration set status='aproved' where rid=%s",id)
    cursor.execute("update login set status='aproved' where rid=%s",id)
    con.commit()
    cursor.close()
    con.close()
    return status_response




@app.route('/reject/<id>', methods=['GET'])
def reject(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("update registration set status='blocked' where rid=%s",id)
    cursor.execute("update login set status='blocked' where rid=%s",id)
    con.commit()
    cursor.close()
    con.close()
    return status_response

@app.route('/deleteemp/<id>', methods=['GET'])
def deleteemp(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("update registration set status='blocked' where rid=%s",id)
    cursor.execute("update login set status='blocked' where rid=%s",id)
    
    con.commit()
    cursor.close()
    con.close()
    return status_response

@app.route('/searchDonor/<group>', methods=['GET'])
def searchDonor(group):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from DonorPersonalInfo where bloodgroup=%s",group)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response


    
@app.route('/feedback',methods=['POST'])
def feedback():
    dataTosave=request.json
    fullname = dataTosave['fullname']
    
    date = dataTosave['date']
    feedback = dataTosave['feedback']
    uId=dataTosave['uId']
    
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("fid", "feedback")
    
    cursor.execute("insert into feedback values(%s,%s,%s,%s,%s)", (maxId,fullname,date,feedback,uId))
    
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/complaint',methods=['POST'])
def complaint():
    dataTosave=request.json
    fullname = dataTosave['fullname']
    
    date = dataTosave['date']
    complaint = dataTosave['complaint']    
    uId=dataTosave['uId']
    
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("cid", "complaint")
    
    cursor.execute("insert into complaint values(%s,%s,%s,%s,%s,%s,%s)", (maxId,fullname,date,complaint,'','pending',uId))
    
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/reply',methods=['POST'])
def reply():
    dataTosave=request.json
   
        
    dateofreply = dataTosave['dateofreply']
    reply = dataTosave['reply']    
    cid = dataTosave['cid']
    
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    # maxId = maxidFinder("cid", "complaint")
    cursor.execute("update complaint set reply=%s,dateofreply=%s where cid=%s",(reply,dateofreply,cid))
    # cursor.execute("insert into complaint values(%s,%s,%s,%s,%s,%s,%s)", (maxId,'','','',dateofreply,reply,uId))
    
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/viewcomplaint', methods=['GET'])
def viewcomplaint():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select * from complaint where  reply='pending'")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/viewcomplaint2', methods=['GET'])
def viewcomplaint2():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select * from complaint where reply!='' and reply!='pending'")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/viewcomplaint3/<id>', methods=['GET'])
def viewcomplaint3(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select * from complaint where reply!='' and rid=%s",id)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response




@app.route('/viewfeedback', methods=['GET'])
def viewfeedback():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select * from feedback")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/viewemployee', methods=['GET'])
def viewemployee():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select EmpName,Designation,Empemail,EmpId,EmpPhn,rid from registration where rid!=1 and type='Employee'and status!='blocked'")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/bloodstatus',methods=['POST'])
def bloodstatus():
    dataTosave=request.json
    bloodgroup = dataTosave['statusbg']
    
    bloodlevel = dataTosave['statusbl']
    status = dataTosave['status']
    uId=dataTosave['uId']
    
    con = mysql.connect() 
    cursor = con.cursor(pymysql.cursors.DictCursor)
    # maxId = maxidFinder("statusid", "bloodstatus")
    cursor.execute("select bloodlevel from bloodstatus where statusid=%s  and rid=%s",(dataTosave['statusbg'],dataTosave["uId"]))
    row=cursor.fetchone()
    blvl=int(row['bloodlevel'])
    blvl=blvl+int(dataTosave['statusbl'])
    cursor.execute("update bloodstatus set bloodlevel=%s,status=%s,rid=%s where statusid=%s", (blvl,status,uId,dataTosave['statusbg']))
     
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

    
@app.route('/updateGallery',methods=['POST'])
def updategallery():
    dataTosave=request.json
    image=dataTosave['image']
    # maxId=dataTosave['gid']
   
    
    image = image.replace("data:image/jpeg;base64,", "")
    path="/home/praveen/Downloads/blood (1)/src/assets/Uploads/Gallery/"
   
    
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("gid", "gallery")
    cursor.execute("insert into gallery values(%s,%s)", (maxId,'./assets/Uploads/Gallery/'+str(maxId+1000)+".jpg"))
    con.commit()
    with open(path + str(maxId + 1000) + ".jpg", "wb") as fh:
        fh.write(base64.decodestring(image))
    cursor.close()
    con.close()
    
    return status_response

@app.route("/gallery",methods=['GET'])
def gallery():
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from gallery")
    row=cursor.fetchone()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/updateAbout',methods=['POST'])
def aboutus():
    dataTosave=request.json
    about = dataTosave['about']
    about2 = dataTosave['about2']
    image = dataTosave['image']
    image = image.replace("data:image/jpeg;base64,", "")
    path="/home/praveen/Downloads/blood (1)/src/assets/Uploads/"

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("id", "aboutus")
    cursor.execute("delete from aboutus")
    cursor.execute("insert into aboutus values(%s,%s,%s,%s)", (maxId,about,about2,'./assets/Uploads/'+str(maxId+1000)+".jpg"))
    
    con.commit()
    with open(path + str(maxId + 1000) + ".jpg", "wb") as fh:
        fh.write(base64.decodestring(image))
    cursor.close()
    con.close()
    
    return status_response

@app.route('/aboutus', methods=['GET'])
def viewaboutus():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from aboutus")
    row=cursor.fetchone()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/notification',methods=['POST'])
def notification():
    dataTosave=request.json
    
    
    date = dataTosave['date']
    notification = dataTosave['notification']
    uId=dataTosave['uId'] 
    
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("id", "notification")
    
    cursor.execute("insert into notification values(%s,%s,%s,%s)", (maxId,date,notification,uId))
    # cursor.execute("select HospName from registration where rid=%s",rid)
    row=cursor.fetchone()
    HospName=str(row["HospName"])
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/viewnotification', methods=['GET'])
def viewnotification():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select date,notification,HospName,HospHead from notification d,registration r where d.rid=r.rid;")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response    


# @app.route('/organ/<id>', methods=['GET'])
# def organ(id):
   
#     con = mysql.connect()
#     cursor = con.cursor(pymysql.cursors.DictCursor)
   
#     cursor.execute("insert into donation)
#     cursor.execute("update login set status='aproved' where rid=%s",id)
#     con.commit()
#     cursor.close()
#     con.close()
#     return status_response


# @app.route('/getDonorMax', methods=['GET'])
# def getDonorMax():   
#     maxId=maxidFinder("did","DonorPersonalInfo")
#     return {'max':maxId}   




@app.route('/addDonations',methods=['POST'])
def addDonations():
    dataTosave=request.json
    
    did = dataTosave['did']
    rid = dataTosave['rid']
    donate = dataTosave['donate']
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("id", "donation")
    cursor.execute("insert into donation values(%s,%s,%s,%s)", (maxId,donate,1,rid))
    con.commit()
    cursor.close()
    con.close()
    
    return status_response


@app.route('/deleteDonations',methods=['POST'])
def deleteDonations():
    dataTosave=request.json
    
    did = dataTosave['did']
    rid = dataTosave['rid']
    donate = dataTosave['donate']
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("id", "donation")
    cursor.execute("delete from donation where organs=%s and did=%s",(donate,1))
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/getHospitalsName', methods=['GET'])
def getHospitalsName():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select HospName from registration where rid!=1")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

 



#  select bloodgroup as name,bloodlevel as value from bloodstatus;

@app.route('/getBloodStatus/<id>', methods=['GET'])
def getBloodStatus(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select bloodgroup as name,bloodlevel as value from bloodstatus where rid=%s",id)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response
    

@app.route('/getBloodStatus2/<HospName>', methods=['GET'])
def getBloodStatus2(HospName):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select b.bloodgroup as name,bloodlevel as value from bloodstatus b,registration r  where b.rid=r.rid and  and HospName=%s",HospName)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response


@app.route('/donorsearch', methods=['POST'])
def donorsearch():
    dataTosave=request.json
    DonorBG=dataTosave["DonorBG"]
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from DonorPersonalInfo where DonorBG=%s ",DonorBG)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/getDonor', methods=["GET"])
def getDonor():

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)

    cursor.execute("select * from DonorPersonalInfo where did>1")  
    row=cursor.fetchall()
    response=jsonify(row)
    return response


@app.route('/alertsearch/<id>', methods=['GET'])
def alertsearch(id):
    # dataTosave=request.json
    # statusbg=dataTosave["statusbg"]
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select HospPhNum from registration  where HospName=%s",id)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/getAlert/<name>', methods=["GET"])
def getAlert(name):
    
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select r.HospName,r.HospPhNum,b.bloodlevel from registration r,bloodstatus b where r.rid=b.rid and bloodgroup=%s order by bloodlevel desc",name)  
    row=cursor.fetchall()
    response=jsonify(row)
    return response
 
# @app.route('/getRecepient', methods=["GET"])
# def getRecepient():

#     con = mysql.connect()
#     cursor = con.cursor(pymysql.cursors.DictCursor)

#     cursor.execute("select did,Name,Gender,Address,Contactno,Bloodgroup from Recepient r,DonorPersonalInfo d where ")  
#     row=cursor.fetchall()
#     response=jsonify(row)
#     return response



@app.route('/getHosp', methods=["GET"])
def getHosp():

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)

    cursor.execute("select HospName from registration where rid>1 and type='hospital'")  
    row=cursor.fetchall()
    response=jsonify(row)

    return response

    # ....................................................................................................

@app.route('/Donorget', methods=['GET'])
def Donorget():
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from DonorPersonalInfo group by rid")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/Recepientget', methods=['GET'])
def Recepientget():
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from Recepient group by rid")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/donate', methods=['GET'])
def donate():
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from donation group by organs" )
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/donationlist', methods=['POST'])
def donationlist():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    
    cursor.execute("select * from donorpersonalinfo p,donation d,recepient r where d.did=p.did and r.did=p.did and d.did=r.did")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/saveDaylyRecord', methods=['POST'])
def donationtable():

    dataTosave=request.json
    Address=dataTosave['Address']
    Bloodgroup=dataTosave['Bloodgroup']
    Contactno=dataTosave['Contactno']
    DOB=dataTosave['DOB']
    Description = dataTosave['Description']
    Doctorname=dataTosave['Doctorname']
    Gender = dataTosave['Gender']
    Name=dataTosave['Name']
    PatientID = dataTosave['PatientID']
    did=dataTosave['did']
    rid=dataTosave['rid']
    print( dataTosave)
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("recid", "recepient")
    
    cursor.execute("insert into recepient values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (maxId,Name,DOB,Gender,Address,Bloodgroup,Description,PatientID,Contactno,Doctorname,did,rid))
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/Addrecepient',methods=['POST'])
def Addrecepient():
    dataTosave=request.json
    Name = dataTosave['Rfname']
    DOB = dataTosave['Rdob']
    Gender = dataTosave['Rgender']
    Address = dataTosave['Raddress']
    Bloodgroup = dataTosave['Rbg']
    Description = dataTosave['Rdescriptn']
    PatientId = dataTosave['Patientid']
    Contactno = dataTosave['ContactNum']
    Doctorname = dataTosave['DoctorName']
    uId = dataTosave['uId']
    

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("recid", "Recepient")
    cursor.execute("insert into Recepient values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (maxId,Name,DOB,Gender,Address,Bloodgroup,Description,PatientId,Contactno,Doctorname,uId))
    
    con.commit()
    cursor.close()
    con.close()
    return status_response


@app.route('/viewrecepient', methods=['GET'])
def viewrecepient():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select * from Recepient r,DonorPersonalInfo d where r.did=d.did")
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response  

@app.route('/profileview/<id>', methods=['GET'])
def profileview(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select HospName,HospHead,Heademail,HospAddrs,HospPhNum,HospTel,About,image from registration where rid=%s",id)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response




@app.route('/getRecepById/<id>', methods=['GET'])
def getRecepById(id):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select * from recepient where recid=%s",id)
    row=cursor.fetchone()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response


@app.route('/DonorSearch/<group>', methods=['GET'])
def DonorSearch(group):
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
   
    cursor.execute("select Name,Gender,Address,Contactno,Bloodgroup from DonorPersonalInfo where did>1 and Bloodgroup=%s",group)
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response  

@app.route('/updatecontact',methods=['POST'])
def contact():
    dataTosave=request.json
    number1 = dataTosave['number1']
    number2 = dataTosave['number2']
    email = dataTosave['email']

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    maxId = maxidFinder("id", "contactus")
    cursor.execute("delete from contactus")
    cursor.execute("insert into contactus values(%s,%s,%s,%s)", (maxId,number1,number2,email))
    
    con.commit()
    cursor.close()
    con.close()
    
    return status_response

@app.route('/contactus', methods=['GET'])
def contactus():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from contactus")
    row=cursor.fetchone()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response

@app.route('/getuserprofile/<id>', methods=["GET"])
def getuserprofile(id):
    con=mysql.connect()
    cursor=con.cursor(pymysql.cursors.DictCursor)

    cursor.execute("select * from registration where rid=%s",id)
    row=cursor.fetchall()
    response=jsonify(row)

    cursor.close()
    con.close()
    return response
    
@app.route('/userprofile', methods=['POST'])
def userprofile():

    dataTosave=request.json
    HospName=dataTosave['HospName']
    HospHead=dataTosave['HospHead']
    HospAddrs=dataTosave['HospAddrs']
    Heademail=dataTosave['Heademail']
    HospTel=dataTosave['Telephone']
    HospPhNum=dataTosave['HospPhNum']
    About=dataTosave['About']
    image = dataTosave['image']
    image = image.replace("data:image/jpeg;base64,", "")
    path="/home/praveen/Downloads/blood (1)/src/assets/Uploads/"

    uId=dataTosave['uId']

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    
    cursor.execute("update registration set HospName=%s,HospHead=%s,HospAddrs=%s,Heademail=%s,HospTel=%s,HospPhNum=%s,About=%s,image=%s where rid=%s",(HospName,HospHead,HospAddrs,Heademail,HospTel,HospPhNum,About,'./assets/Uploads/'+str(int(uId)+1000)+".jpg",uId))
    # cursor.execute("insert into login values(%s,%s,%s,%s,%s)", (maxidFinder("lId","login"),email,password,"user",maxId))
    con.commit()
    con.commit()
    with open(path + str(int(uId) + 1000) + ".jpg", "wb") as fh:
        fh.write(base64.decodestring(image))
    cursor.close()
    con.close()
    print( base64)
    return status_response

@app.route('/employeeprofile', methods=['POST'])
def employeeprofile():

    dataTosave=request.json
    EmpName=dataTosave['FName']
    Designation=dataTosave['Designtn']
    Empemail=dataTosave['Emailid']
    EmpId=dataTosave['Empid']
    EmpPhn=dataTosave['EmpPhnum']
    uId=dataTosave['uId']

    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    
    cursor.execute("update registration set EmpName=%s,Designation=%s,Empemail=%s,EmpId=%s,EmpPhn=%s where rid=%s",(EmpName,Designation,Empemail,EmpId,EmpPhn,uId))
    # cursor.execute("insert into login values(%s,%s,%s,%s,%s)", (maxidFinder("lId","login"),email,password,"user",maxId))
    con.commit()
    con.commit()
   
    cursor.close()
    con.close()
    print( base64)
    return status_response


app.route('/organsearch', methods=['POST'])
def organsearch():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    data=request.json
    cursor.execute("select * from donorpersonalinfo p,donation d where d.did=p.did and d.bloodgroup=%s and d.organs=%s",(data['blood'],data['org']))
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response


@app.route('/organsearching', methods=['POST'])
def organsearching():
   
    con = mysql.connect()
    cursor = con.cursor(pymysql.cursors.DictCursor)
    data=request.json
    print( data['blood'])
    cursor.execute("select * from donorpersonalinfo p,donation d where d.did=p.did and p.bloodgroup=%s and d.organs=%s",(data['blood'],data['org']))
    row=cursor.fetchall()
    response=jsonify(row)
    cursor.close()
    con.close()
    return response



@app.route('/getDonorById/<id>', methods=["GET"])
def getDonorById(id):
    con=mysql.connect()
    cursor=con.cursor(pymysql.cursors.DictCursor)

    cursor.execute("select * from DonorPersonalInfo where rid=%s",id)
    row=cursor.fetchall()
    response=jsonify(row)

    cursor.close()
    con.close()
    return response

if __name__ == '__main__':
    app.run(debug='false')


# {
# "About": "ddddddddxz",
# "HeadId": "hjhjhjh",
# "Heademail": "praveenprakash407@gmail.com",
# "HospAddrs": "hhjh",
# "HospCat": "Level 1(B)",
# "HospEmailid": "praveenprakash407@gmail.com",
# "HospHead": "jjhjhjh",
# "HospLicNum": "asdas",
# "HospName": "hjhjh",
# "HospOwn": "option1",
# "HospPhNum": "98899898",
# "YOE": "2019-12-21",
# "image": ""

# }


    