Search.setIndex({docnames:["api","db/base","db/crud","db/database","db/db","db/models","exceptions/exceptions","index","schemes/schemes","services/service_rec","services/service_res","services/services","tools/config","tools/gapi","tools/hashing","tools/my_logging","tools/recipe_db","tools/security","tools/tools","usage","views/error","views/index","views/rating","views/recipe","views/restaurant","views/signin","views/views"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","db/base.rst","db/crud.rst","db/database.rst","db/db.rst","db/models.rst","exceptions/exceptions.rst","index.rst","schemes/schemes.rst","services/service_rec.rst","services/service_res.rst","services/services.rst","tools/config.rst","tools/gapi.rst","tools/hashing.rst","tools/my_logging.rst","tools/recipe_db.rst","tools/security.rst","tools/tools.rst","usage.rst","views/error.rst","views/index.rst","views/rating.rst","views/recipe.rst","views/restaurant.rst","views/signin.rst","views/views.rst"],objects:{"":[[16,5,1,"","recipe_db"]],"db.crud":[[2,0,0,"-","allergies"],[2,0,0,"-","cuisine"],[2,0,0,"-","restBewertung"]],"db.crud.allergies":[[2,1,1,"","create_allergie"],[2,1,1,"","get_all_allergies"]],"db.crud.restBewertung":[[2,1,1,"","create_bewertung"],[2,1,1,"","delete_bewertung"],[2,1,1,"","get_all_user_bewertungen"],[2,1,1,"","get_bewertung_from_user_to_rest"],[2,1,1,"","update_bewertung"]],"db.database":[[3,1,1,"","get_db"]],"db.models":[[5,0,0,"-","allergie"],[5,0,0,"-","bewertung"],[5,0,0,"-","cuisine"],[5,0,0,"-","filter"],[5,0,0,"-","person"],[5,0,0,"-","restaurant"]],"db.models.allergie":[[5,2,1,"","Allergie"]],"db.models.allergie.Allergie":[[5,3,1,"","beschreibung"],[5,3,1,"","name"]],"db.models.bewertung":[[5,2,1,"","BewertungRecipe"],[5,2,1,"","BewertungRestaurant"]],"db.models.bewertung.BewertungRecipe":[[5,3,1,"","kommentar"],[5,3,1,"","person"],[5,3,1,"","person_email"],[5,3,1,"","rating"],[5,3,1,"","restaurant"],[5,3,1,"","rezept_id"],[5,3,1,"","rezept_name"],[5,3,1,"","zeitstempel"]],"db.models.bewertung.BewertungRestaurant":[[5,3,1,"","kommentar"],[5,3,1,"","person"],[5,3,1,"","person_email"],[5,3,1,"","place_id"],[5,3,1,"","rating"],[5,3,1,"","restaurant"],[5,3,1,"","zeitstempel"]],"db.models.cuisine":[[5,2,1,"","Cuisine"]],"db.models.cuisine.Cuisine":[[5,3,1,"","name"]],"db.models.filter":[[5,2,1,"","FilterRest"]],"db.models.filter.FilterRest":[[5,3,1,"","allergies"],[5,3,1,"","costs"],[5,3,1,"","cuisines"],[5,3,1,"","email"],[5,3,1,"","person"],[5,3,1,"","radius"],[5,3,1,"","rating"],[5,3,1,"","zipcode"]],"db.models.person":[[5,2,1,"","Person"]],"db.models.person.Person":[[5,3,1,"","bewertungen"],[5,3,1,"","email"],[5,3,1,"","filterRest"],[5,3,1,"","hashed_password"],[5,3,1,"","last_login"]],"db.models.restaurant":[[5,2,1,"","Restaurant"]],"db.models.restaurant.Restaurant":[[5,3,1,"","bewertungen"],[5,3,1,"","name"],[5,3,1,"","place_id"]],"schemes.Allergies":[[8,3,1,"","LACTOSE"],[8,3,1,"","WHEAT"]],"schemes.Cuisine":[[8,3,1,"","AMERICAN"],[8,3,1,"","ASIAN"],[8,3,1,"","BAKERY"],[8,3,1,"","BUTCHER"],[8,3,1,"","COFFE"],[8,3,1,"","DOENER"],[8,3,1,"","FASTFOOD"],[8,3,1,"","GERMAN"],[8,3,1,"","GREEK"],[8,3,1,"","INDIAN"],[8,3,1,"","ITALIAN"],[8,3,1,"","KOREAN"],[8,3,1,"","RESTAURANT"],[8,3,1,"","THAILAND"],[8,3,1,"","TURKEY"],[8,3,1,"","VEGAN"],[8,3,1,"","VEGETARIAN"]],"schemes.exceptions":[[6,6,1,"","DatabaseException"],[6,6,1,"","DuplicateEntry"],[6,6,1,"","GoogleApiException"],[6,6,1,"","NoResultsException"],[6,6,1,"","NoneExcistingZipCodeException"],[6,6,1,"","NotAuthorizedException"],[6,6,1,"","RecipeNotFound"],[6,6,1,"","RestaurantNotFound"],[6,6,1,"","UserNotFound"]],"schemes.scheme_allergie":[[8,2,1,"","PydanticAllergies"]],"schemes.scheme_allergie.PydanticAllergies":[[8,4,1,"","allergie_values"],[8,3,1,"","name"]],"schemes.scheme_cuisine":[[8,2,1,"","PydanticCuisine"]],"schemes.scheme_cuisine.PydanticCuisine":[[8,4,1,"","cuisine_values"],[8,3,1,"","name"]],"schemes.scheme_filter":[[8,2,1,"","FilterBase"],[8,2,1,"","FilterRecipe"],[8,2,1,"","FilterRest"],[8,2,1,"","FilterRestDatabase"]],"schemes.scheme_filter.FilterBase":[[8,3,1,"","allergies"],[8,3,1,"","cuisines"],[8,3,1,"","rating"],[8,4,1,"","rating_range"]],"schemes.scheme_filter.FilterRecipe":[[8,3,1,"","keyword"],[8,3,1,"","total_time"]],"schemes.scheme_filter.FilterRest":[[8,3,1,"","costs"],[8,4,1,"","costs_range"],[8,3,1,"","location"],[8,3,1,"","radius"]],"schemes.scheme_filter.FilterRestDatabase":[[8,3,1,"","costs"],[8,4,1,"","costs_range"],[8,4,1,"","plz_length"],[8,3,1,"","radius"],[8,3,1,"","zipcode"]],"schemes.scheme_recipe":[[8,2,1,"","Recipe"],[8,2,1,"","RecipeBase"],[8,2,1,"","RecipeBewertungBase"],[8,2,1,"","RecipeBewertungCreate"],[8,2,1,"","RecipeBewertungReturn"]],"schemes.scheme_recipe.Recipe":[[8,3,1,"","cookTime"],[8,3,1,"","id"],[8,3,1,"","image"],[8,3,1,"","ingredients"],[8,3,1,"","name"],[8,3,1,"","prepTime"],[8,3,1,"","url"]],"schemes.scheme_recipe.RecipeBase":[[8,3,1,"","id"]],"schemes.scheme_recipe.RecipeBewertungBase":[[8,3,1,"","comment"],[8,3,1,"","name"],[8,3,1,"","rating"]],"schemes.scheme_recipe.RecipeBewertungCreate":[[8,3,1,"","person"],[8,3,1,"","recipe"]],"schemes.scheme_recipe.RecipeBewertungReturn":[[8,3,1,"","email"],[8,3,1,"","id"],[8,3,1,"","timestamp"]],"schemes.scheme_rest":[[8,2,1,"","Geometry"],[8,2,1,"","LocationBase"],[8,2,1,"","LocationRest"],[8,2,1,"","RestBewertungBase"],[8,2,1,"","RestBewertungCreate"],[8,2,1,"","RestBewertungReturn"],[8,2,1,"","Restaurant"],[8,2,1,"","RestaurantBase"],[8,2,1,"","RestaurantCreate"]],"schemes.scheme_rest.Geometry":[[8,3,1,"","location"]],"schemes.scheme_rest.LocationBase":[[8,3,1,"","lat"],[8,3,1,"","lng"]],"schemes.scheme_rest.LocationRest":[[8,3,1,"","adr"]],"schemes.scheme_rest.RestBewertungBase":[[8,3,1,"","comment"],[8,3,1,"","name"],[8,3,1,"","rating"]],"schemes.scheme_rest.RestBewertungCreate":[[8,3,1,"","person"],[8,3,1,"","restaurant"]],"schemes.scheme_rest.RestBewertungReturn":[[8,3,1,"","email"],[8,3,1,"","place_id"],[8,3,1,"","timestamp"]],"schemes.scheme_rest.Restaurant":[[8,3,1,"","geometry"],[8,3,1,"","homepage"],[8,3,1,"","maps_url"],[8,3,1,"","name"],[8,3,1,"","own_rating"],[8,3,1,"","phone_number"],[8,3,1,"","rating"]],"schemes.scheme_rest.RestaurantBase":[[8,3,1,"","name"],[8,3,1,"","place_id"]],"schemes.scheme_rest.RestaurantCreate":[[8,3,1,"","name"]],"schemes.scheme_user":[[8,2,1,"","User"],[8,2,1,"","UserBase"],[8,2,1,"","UserCreate"],[8,2,1,"","UserLogin"]],"schemes.scheme_user.User":[[8,3,1,"","last_login"]],"schemes.scheme_user.UserBase":[[8,3,1,"","email"]],"schemes.scheme_user.UserCreate":[[8,3,1,"","password"]],"schemes.scheme_user.UserLogin":[[8,3,1,"","hashed_password"],[8,3,1,"","last_login"]],"services.service_rec":[[9,4,1,"","search_recipe"]],"services.service_res":[[10,1,1,"","add_assessment"],[10,1,1,"","apply_filter"],[10,1,1,"","create_rest_filter"],[10,1,1,"","delete_assessment"],[10,1,1,"","fill_user_rating"],[10,1,1,"","filter_rating"],[10,1,1,"","get_assessments_from_user"],[10,1,1,"","get_coordinates_from_zipcode"],[10,1,1,"","get_rest_filter_from_user"],[10,1,1,"","search_for_restaurant"],[10,1,1,"","select_restaurant"],[10,1,1,"","update_assessment"],[10,1,1,"","update_rest_filter"]],"tools.config":[[12,2,1,"","Setting"],[12,5,1,"","settings"]],"tools.config.Setting":[[12,3,1,"","ACCESS_TOKEN_EXPIRE_MINUTES"],[12,3,1,"","ALGORITHM"],[12,3,1,"","GOOGLE_API_KEY"],[12,3,1,"","POSTGRES_DATABASE"],[12,3,1,"","POSTGRES_PASSWORD"],[12,3,1,"","POSTGRES_PORT"],[12,3,1,"","POSTGRES_SERVER"],[12,3,1,"","POSTGRES_USER"],[12,3,1,"","SECRET_KEY"],[12,3,1,"","SQL_LITE"]],"tools.gapi":[[13,1,1,"","geocode"],[13,1,1,"","nearby_search"],[13,1,1,"","place_details"],[13,1,1,"","search_restaurant"]],"tools.hashing":[[14,2,1,"","Hasher"]],"tools.hashing.Hasher":[[14,4,1,"","get_password_hash"],[14,4,1,"","verify_password"]],"tools.my_logging":[[15,5,1,"","logger"],[15,4,1,"","setup_logging"]],"tools.recipe_db":[[16,2,1,"","RecipeDB"]],"tools.recipe_db.RecipeDB":[[16,4,1,"","filter_cooktime"],[16,4,1,"","filter_keyword"]],"tools.security":[[17,1,1,"","authenticate_user"],[17,1,1,"","create_access_token"],[17,1,1,"","get_current_user"],[17,1,1,"","invalid_access_token"]],"views.error":[[20,1,1,"","error"]],"views.index":[[21,1,1,"","index"],[21,1,1,"","main"]],"views.rating":[[22,1,1,"","delete_rating"],[22,1,1,"","edit_rating"],[22,1,1,"","edit_rating_post"],[22,1,1,"","rating"]],"views.restaurant":[[24,1,1,"","findrestaurant"]],"views.signin":[[25,1,1,"","bool_response"],[25,1,1,"","confirm_delete"],[25,1,1,"","delete_singined_user"],[25,1,1,"","login"],[25,1,1,"","login_for_access_token"],[25,1,1,"","pwchange"],[25,1,1,"","pwchange_singined_user"],[25,1,1,"","pwreset"],[25,1,1,"","recover"],[25,1,1,"","register"],[25,1,1,"","register_post"],[25,1,1,"","signin"],[25,1,1,"","signout"]],db:[[1,0,0,"-","base"],[3,0,0,"-","database"]],recipe:[[23,4,1,"","findrecipe"]],schemes:[[8,2,1,"","Allergies"],[8,2,1,"","Cuisine"],[6,0,0,"-","exceptions"],[8,0,0,"-","scheme_allergie"],[8,0,0,"-","scheme_cuisine"],[8,0,0,"-","scheme_filter"],[8,0,0,"-","scheme_recipe"],[8,0,0,"-","scheme_rest"],[8,0,0,"-","scheme_user"]],services:[[10,0,0,"-","service_res"]],tools:[[13,0,0,"-","gapi"],[14,0,0,"-","hashing"],[17,0,0,"-","security"]],views:[[20,0,0,"-","error"],[21,0,0,"-","index"],[22,0,0,"-","rating"],[24,0,0,"-","restaurant"],[25,0,0,"-","signin"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","data","Python data"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:data","6":"py:exception"},terms:{"0":[8,10,19],"1":8,"2":[10,19],"20":13,"30":12,"4":[8,10],"401":6,"5":[5,8],"5432":19,"80":19,"8000":19,"8080":19,"boolean":[16,25],"class":[5,12,14,16],"default":[8,12,13,15,17,19,21,22,23,24,25],"do":[10,12,13,19],"enum":8,"float":[8,24],"function":[2,3,8,10,13,17,20,21,22,24,25],"import":[1,12],"int":[2,5,8,10,12,23,24],"long":12,"new":[2,8,10,21],"return":[2,3,8,9,10,13,14,16,17,20,21,22,23,24,25],"static":[14,16],"true":[12,14],"try":[8,17],For:13,If:[2,8,10,13,15,19],In:19,It:15,OR:[2,17],The:[2,7,8,9,10,13,16,17,25],To:[7,8,13,19],about:8,access:25,access_token:25,access_token_expire_minut:12,accord:[10,13],activ:19,ad:[2,10],add:[2,6,10,17],add_assess:10,addit:[7,13],addr:13,address:[8,10,13],adr:8,affect:10,after:19,again:[14,17],alchemi:5,algorit:12,algorithm:12,all:[1,2,5,6,8,9,10,12,13,15,19,22],allergi:[0,4,24],allergie_valu:8,alreadi:[10,19],also:[11,13,19],american:8,an:[8,10,17],ani:8,api:[6,7,8,10,12,13],appli:10,applic:18,apply_filt:10,ar:[5,6,8,10,11,12,14,18,26],asian:8,assess:[2,5,8,10],async:[17,22,23,24,25],atr:25,autamt:5,authent:[6,17],authenticate_us:17,authentif:25,author:6,autom:8,automat:[2,5,12],avail:13,avoid:[13,14],b:19,backend:[8,11],bakeri:8,base:[0,4,8,10,13],baseclass:8,bcrypt:14,bearer:6,beschreibung:5,better:8,between:[8,10],bewertugen:2,bewertung:[4,8],bewertungen:[5,10],bewertungrecip:5,bewertungrestaur:[2,5],bool:[12,14,25],bool_respons:25,boolresp:25,build:19,bundel:1,busi:13,butcher:8,button:25,buttontext:25,call:[11,15],can:[5,8,14,19],care:8,cd:19,check:[8,14],checkmark:25,choos:10,choosen:[9,10],cl:8,classmethod:8,clone:19,code:[6,13],coff:8,collect:7,column:16,com:[13,19],comment:[2,8,10],commun:[8,10],concern:13,config:[0,15,18],config_path:15,configur:15,confirm:25,confirm_delet:25,connect:[3,10,11,13],connet:4,contain:[6,8,10,12,16,18,19,25,26],convert:[5,8,10],cook:8,cooktim:[8,16],coordin:[8,10],correct:25,corrospond:2,cost:[5,8,24],costs_rang:8,count:10,countri:13,creat:[2,3,6,8,10,12,17,19],create_access_token:17,create_allergi:2,create_bewertung:2,create_rest_filt:10,crud:[0,4],cuisin:[0,4,13,24],cuisine_valu:8,current:[10,17,21,22,24,25],current_us:[21,22,24,25],data:[16,17,19,25],databas:[0,5,6,10,11,12,17,18,19,25],databaseexcept:[6,10],databs:17,datafram:16,datetim:[5,8,16,17],db:[2,3,5,6,8,10,12,14,19,21,22,24,25],db_session:[10,17,21,22,24,25],defgault:8,delet:[2,10,22,25],delete_assess:10,delete_bewertung:2,delete_r:22,delete_singined_us:25,delta:17,depend:[10,17,19,21,22,24,25],descript:16,develop:13,dhbw:19,dict:[6,13,17],differ:26,directli:19,displai:[22,25],document:13,doe:[2,6,10,13],doener:8,dont:19,duplic:[2,6,10],duplicateentri:[2,6],dynam:25,e:19,edit:22,edit_r:22,edit_rating_post:22,effect:2,either:25,element:13,email:[5,8,17],enabl:19,encrypt:14,entri:6,env:12,equal:16,err_msg:20,error:[0,6,24,25,26],error_msg:6,essensfindung:19,exampl:19,except:[0,10,13,17,25],exist:[2,6,10],expir:17,expires_delta:17,extend:8,fail:17,fale:14,fals:[17,25],fastapi:[7,25],fastfood:8,fehler:25,file:[1,15,19],fill:13,fill_user_r:10,filter:[0,4,7,9,10,13,16],filter_cooktim:16,filter_keyword:16,filter_r:10,filter_rest:10,filter_upd:10,filterbas:8,filterrecip:[8,9],filterrest:[5,8,10,13],filterrestdatabas:[8,10],find:16,findrecip:23,findrestaur:24,floor:13,fn:19,foreign:5,foreignkei:5,form:25,form_data:25,format:13,found:[6,10,13,15],fqdn:[12,19],framework:7,from:[2,5,6,8,10,11,12,13,14,15,16,17,19,25],frontend:[8,11],full:[4,10],further:8,gain:12,gapi:[0,18],gener:[3,25],geocod:[13,19],geometri:8,german:8,get:[2,3,8,10,13,14,17,22],get_all_allergi:2,get_all_user_bewertungen:2,get_assessments_from_us:10,get_bewertung_from_user_to_rest:2,get_coordinates_from_zipcod:10,get_current_us:[17,21,22,24,25],get_db:[3,10,17,21,22,24,25],get_password_hash:14,get_rest_filter_from_us:10,git:19,github:19,given:[9,10,16,17],glutenunvertraeglichkeit:8,go:10,googl:[5,6,8,10,12,13],google_api_kei:[12,19],google_r:10,googleapi:7,googleapiexcept:[6,10,13],got:[6,8,10,13],greek:8,gunicorn:19,hack:14,handl:[8,26],hash:[0,5,8,12,18,19],hashed_password:[5,8,14],hasher:14,have:[10,13,19],he:8,header:6,here:19,home:21,homepag:8,how:12,href:25,hs256:12,html:21,htmlrespons:22,http:[13,19,20,21,22,23,24,25,26],httpx:13,id:[2,8,22],identifi:22,imag:8,includ:2,index:[0,7,26],indian:8,inform:[7,8,10,13],ingredi:8,initi:12,input:10,insid:25,instanc:12,instead:12,interact:[5,9,10,16],internact:8,invalid:17,invalid_access_token:17,ip:[12,19],italian:8,jinja:7,json:16,json_path:16,jtw:17,just:19,jwt:[12,17,19],k:19,kei:[2,5,12,19],keyword:[8,16,23],kommentar:5,korean:8,kwarg:5,lactos:8,laktoseintoleranz:8,land:[20,21],landingpag:25,last:8,last_login:[5,8],lat:[8,24],later:2,latitud:[8,24],least:19,length:[5,8,23],less:16,like:3,link:25,list:[2,8,10,13],lite:[4,19],lng:[8,24],load:[12,16],local:17,localhost:19,locat:[8,10,13],locationbas:[8,10],locationrest:8,lock:19,log:[0,17,18,21,22,25],logger:15,logic:[20,22,24,25],login:[8,25],login_for_access_token:25,logout:25,longitud:[8,24],lookup:10,made:6,mail:[8,10],main:[7,10,11,19,21,25],map:[2,8,10,13,19],maps_url:8,match:[2,22],max:[8,16],maxim:5,maximum:8,messag:[20,25],method:[8,14],middlewar:11,minim:[23,24],minimum:[5,8],minut:12,model:[0,2,4,8],modifi:12,modul:[7,10,12],more:13,msg:25,my_log:15,my_logg:15,name:[5,8,12,13,15,16,19,22],nation:13,nearbi:13,nearby_search:13,need:[8,10,18,19],neg:25,never:14,new_assess:10,new_bewertung:2,next_page_token:13,none:[2,5,8,10,13,17,23,24,25],noneexcistingzipcodeexcept:[6,10],nonetyp:25,noresultsexcept:[6,10],notauthorizedexcept:[6,17,25],now:10,number:[2,10,13],oauth2:25,oauth2_schem:[17,25],oauth2passwordbearerwithcooki:[17,25],oauth2passwordrequestform:25,ob:10,object:12,old:[2,25],old_assess:10,old_bewertung:2,onc:15,one:[2,8,9,10,16],onli:[2,5,8,10,15,16],oper:15,option:[2,5,8,10,13,15,17,19,21,22,23,24,25],origin:8,orm:[2,8,10,17,21,22,24,25],os:12,other:1,otherwis:[5,17],out:13,over:25,own:[6,12,19],own_rat:8,owner:[2,5,8,10],p:19,page:[7,8,20,21,25],palce_id:13,panda:16,param:13,paramet:[2,8,9,10,13,14,15,16,17,20,21,22,23,24,25],pass:8,password:[5,8,12,14,17,19,25],passwordinput:25,path:15,person:[2,4,8,10,19],person_email:5,phone_numb:8,phonenumb:8,pip:19,place:[13,19,22],place_detail:13,place_id:[5,6,8,22],placeid:8,plain:14,plain_password:14,plaintext:8,plu:13,plz_length:8,poetri:19,port:[12,19],posit:[8,25],possibl:10,post:26,postal:13,postgr:19,postgres_databas:[12,19],postgres_password:[12,19],postgres_port:[12,19],postgres_serv:[12,19],postgres_us:[12,19],postgresql:19,postion:8,postresql:4,preload:19,preper:8,preptim:[8,16],price:8,primari:[2,5],product:19,project:[7,19],pwchang:25,pwchange_singined_us:25,pwreset:25,py:19,pydanticallergi:8,pydanticcuisin:8,pyproject:19,python:[7,19],queri:[6,13],radiu:[5,8,24],rais:[2,8,10,13,15,17,25],random:[7,10],rate:[0,2,5,8,10,24,26],rating_rang:8,read:2,recep:8,recip:[0,6,7,10,11,18,26],recipe_db:16,recipe_filt:9,recipebas:8,recipebewertungbas:8,recipebewertungcr:8,recipebewertungreturn:8,recipedb:16,recipeinstrucion:16,recipeitem:16,recipenotfound:6,recov:25,recurs:13,redirect:[22,24,25],redirectrespons:[22,24,25],reduc:16,refer:13,regist:25,register_post:25,registr:25,remov:[10,17],render:[22,25],renderd:21,requerd:[21,25],request:[6,13,20,21,22,23,24,25,26],requir:19,res_filt:13,respons:[20,21,22,23,24,25,26],rest:[2,10],rest_nam:22,restar:10,restaur:[0,2,4,7,11,13,22,26],restauranat:2,restaurantbas:[2,8,10],restaurantcr:8,restaurantnotfound:[2,6],restbewertung:2,restbewertungbas:8,restbewertungcr:[2,8,10],restbewertungreturn:[8,10],result:[6,10,13],revonvert:8,rezept_id:5,rezept_nam:5,router:[20,21,22,24,25,26],row:[2,10],run:19,runtimewarn:15,safe:14,same:14,save:[5,8,10,12,14,22],scheme:[0,2,5,6,9,10,13,17,21,22,24,25],scheme_allergi:[2,8],scheme_cuisin:8,scheme_filt:[8,9,10,13],scheme_recip:[8,9],scheme_rest:[2,8,10,13],scheme_restrestaur:13,scheme_us:[2,8,10,17,21,22,24,25],search:[5,6,7,8,9,10,13,23,24],search_for_restaur:10,search_recip:9,search_restaur:13,secret:19,secret_kei:[12,19],secur:[17,25],see:[10,13,19],select:[2,10,24],select_restaur:10,server:[12,19],servic:[0,9,10,13],service_r:10,service_rec:9,session:[2,3,10,17,21,22,24,25],set:[2,5,12,19,23,24],setup:15,setup_log:15,should:13,sign:25,signin:[0,26],signout:25,simpl:19,singl:[2,3],site:26,so:10,some:[6,13,18],someon:17,someth:13,sometim:11,sourc:[2,3,5,6,8,10,12,13,14,17,20,21,22,24,25],specif:[2,10,13],specifi:[2,8,13],specifict:13,sql:[4,5,19],sql_lite:12,sqlalchemi:[2,5,10,17,21,22,24,25],stand:2,starlett:[20,21,22,23,24,25],startseit:25,status_cod:6,store:[8,17],str:[5,6,8,10,12,13,14,16,17,20,22,23,24,25],streed:13,street:13,string:[10,14],structur:5,success:[2,25],suit:13,tabl:[2,5],take:[8,17],templat:[21,22,25],templaterespons:[20,21,22,23,24,25],text:[14,25],thailand:8,than:13,thi:[2,5,8,10,11,12,13,14,15,16,19],time:[8,16],timedelta:[8,16,17],timestamp:[2,8],tit20:19,titl:25,token:[12,17,25],toml:19,tool:[0,12,13,14,15,16,17],total_tim:[8,16],transact:3,turkei:8,txt:19,type:[2,3,5,8,9,10,12,13,14,16,17,20,21,22,23,24,25],under:[10,25],union:[10,17,23,24],uniqu:10,unit:13,updat:[2,5,8,10,25],update_assess:10,update_bewertung:2,update_rest_filt:10,url:[8,25],us:[5,7,8,12,13,14,15,16,19],usag:7,useful:18,user:[0,2,5,6,10,12,17,19,21,22,23,24,25],user_f:10,user_mail:10,user_pd_fram:16,user_r:10,userbas:[2,8,10],usercr:8,userlogin:[8,17,21,25],usernam:17,usernotfound:[2,6,10],uvicorn:19,uvicornwork:19,v:19,valid:[8,12,17,25],valu:[8,10,14],valueerror:8,vegan:8,vegetarian:8,verifi:[14,17],verify_password:14,view:[0,20,21,22,24,25],w:19,wa:10,wai:14,want:[13,16],warn:15,we:7,web:13,webappl:7,websit:[8,20,21,22,24],weight:10,went:13,wheat:8,when:5,where:10,which:25,whole:16,worker:19,write:19,written:7,wrong:[8,13,25],www:6,yml:[15,19],you:[5,6,8,11,13,14,16,19],your:[12,19],yourself:12,zeitstempel:5,zip:6,zipcod:[5,8,10,13,24]},titles:["API Documents","Base","CRUD","Database","Database","Models","Exceptions","Welcome to Essensfindung\u2019s documentation!","Schemes","Recipe","Restaurant","Services","Config","GAPI","Hashing","Logging","Recipe Database","Config","Tools","Usage","Error","Index","Rating","Recipe","Restaurant","Signin","Views"],titleterms:{"class":8,allergi:[2,5,8],api:[0,19],app:19,base:1,bewertung:[2,5],compos:19,config:[12,17],configur:19,consol:19,content:[0,4,7,11,18,26],crud:2,cuisin:[2,5,8],databas:[3,4,16],docker:19,document:[0,7],env:19,error:20,essensfindung:7,except:6,filter:[5,8],gapi:13,googl:19,hash:14,index:21,indic:7,instal:19,log:15,model:5,person:5,pydant:8,rate:22,recip:[8,9,16,23],restaur:[5,8,10,24],s:7,scheme:8,servic:11,signin:25,start:19,tabl:7,token:19,tool:18,usag:19,user:8,view:26,welcom:7}})