import datetime
import random
# start_date=datetime.date(2022,10,5)
# end_date=datetime.date(2022,10,7)
st=datetime.datetime(2022,6,30,9,33,18)
lst=[i for i in range(9,19)]
delta1 = datetime.timedelta(minutes=48)
delta2=datetime.timedelta(hours=1)
count=0
for i in range(750):
    count+=1
    st+=delta2
    in_time=st
    st+=delta2
    out_time=st
    if(in_time.hour and out_time.hour in lst):
        if in_time.weekday()<=4 and out_time.weekday()<=4:
            tag_id=random.randint(201, 206)
            # tag_id=206
            did=random.randint(1,3)
            print(f'insert into "in_out" (tag_id,in_time,out_time,id) values ({tag_id},\'{in_time}\',\'{out_time}\',{did});')

           
    st+=delta2
    in_time=st
    st+=delta2
    out_time=st
    if(in_time.hour and out_time.hour in lst):
        if in_time.weekday()<=4 and out_time.weekday()<=4:
            tag_id=random.randint(201, 206)
            # tag_id=206
            did=random.randint(1,3)
            print(f'insert into "in_out" (tag_id,in_time,out_time,id) values ({tag_id},\'{in_time}\',\'{out_time}\',{did});')
           
    st+=delta1
    in_time=st
    st+=delta1
    out_time=st
    if(in_time.hour and out_time.hour in lst):
        if in_time.weekday()<=4 and out_time.weekday()<=4:
            tag_id=random.randint(201, 206)
            # tag_id=206
            did=4
            print(f'insert into "in_out" (tag_id,in_time,out_time,id) values ({tag_id},\'{in_time}\',\'{out_time}\',{did});')
       