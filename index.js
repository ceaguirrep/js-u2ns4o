respuesta_ws = {"code":"200","message":"Consulta Realizada","Partys":[{"Identification":"3525709","IdentificationType":"CC","CheckSumIdentification":"8","RoleId":"1","Role":"Customer","FromDate":"2017-12-09","StatusId":"101","Status":"Active","Person":{"FirstName":"Carlos","MiddleName":"Eduardo","LastName":"Aguirre","SecondLastName":"Pulgarin","SourceId":"8","SourceName":"Credit Agency"},"Organization":[],"CustomerLegacy":[{"Id":"3525709","Identification":"3525709","IdentificationType":"CC","SourceId":"1","SourceName":"Fenix"},{"Id":"1-7535-754","Identification":"3525709","IdentificationType":"C\u00e9dula de ciudadan\u00eda","SourceId":"2","SourceName":"Siebel"},{"Id":"1-2IZR7IA","Identification":"3525709","IdentificationType":"CC","SourceId":"4","SourceName":"Portal CRM"}],"Characteristics":[],"RoleCharacteristics":[],"Accounts":["1431523990","CC|3525709","15026191"]}],"Accounts":[{"Id":"1431523990","SourceId":"2","SourceName":"Siebel","TypeId":"1402","Type":"Service","StatusId":"101","Status":"Active","Assets":["1-2GUVU511W","1-2GUVU511W"],"LocalAddress":{"AddressId":"1815224","AddressHash":"a79c7fb5bc755a3c6b3d358db415944e","Address":"KR 99 # 65 - 300 IN 316","Aggreghated":"","Stratification":"","Latitude":"","Longitude":"","AlternateId":"1431523990","GeographicPlace":{"Municipality":{"Id":"37","Name":"Medell\u00edn","AlternateId":"05001000"},"Department":{"Id":"3","Name":"Antioquia","AlternateId":"05"},"Country":{"Id":"1","Name":"Colombia","AlternateId":"COL"}},"Legacy":{"AddressId":"340758","Address":"KR 99 # 65 - 300 IN 316","Aggreghated":"","Stratification":"","Latitude":"","Longitude":"","AlternateId":"1431523990","GeographicPlace":{"Name":"Medellin","Type":"Municipality","AlternateId":"05001000"}}}},{"Id":"CC|3525709","SourceId":"2","SourceName":"Siebel","TypeId":"1400","Type":"Customer","StatusId":"101","Status":"Active","Assets":["1-2GUVU511W"],"LocalAddress":[]},{"Id":"15026191","SourceId":"10","SourceName":"Open - UNE","TypeId":"1401","Type":"Billing","StatusId":"101","Status":"Active","Assets":["1-2GUVU511W"],"LocalAddress":{"AddressId":"2","AddressHash":"9726f20371e04edfc287b78413535d3a","Address":"Address could not be normalized","Aggreghated":"","Stratification":"","Latitude":"","Longitude":"","AlternateId":"","GeographicPlace":{"Municipality":{"Id":"37","Name":"Medell\u00edn","AlternateId":"05001000"},"Department":{"Id":"3","Name":"Antioquia","AlternateId":"05"},"Country":{"Id":"1","Name":"Colombia","AlternateId":"COL"}},"Legacy":{"AddressId":"4964629","Address":"CR 99 CL 65 -300 (INTERIOR 316 )","Aggreghated":"","Stratification":"1","Latitude":"","Longitude":"","AlternateId":"56929005003000316","GeographicPlace":{"Name":"MEDELL\u00cdN","Type":"Municipality","AlternateId":"5|1"}}}}],"Products":[{"ProductId":"7","Name":"Internet","Assets":[{"SubscriptionNumber":"1-2GUVU511W","MeasuringElement":"","SourceId":"2","SourceName":"Siebel","GeographicAreaId":"","AlternateId":"1-2IKZ954T5","MediaTypeId":"1001","MediaType":"HFC","UsageId":"1701","Usage":"Residential","ProductOffering":{"Id":"120","Name":"60 MB","StatusId":"101","Status":"Active","Legacy":{"Id":"|1-KJS9|1-BUWXL78||","Name":"Internet 60MB viene de Internet 15MB","Status":"Active"},"Specifications":[{"Id":"60101","Name":"Internet Connection","Characteristics":[{"CharacteristicId":"6010102","Name":"Upstream","ValueId":"601010206","Value":"5 MB","EntryValue":false},{"CharacteristicId":"6010103","Name":"Clasification","ValueId":"601010301","Value":"Banda Ancha","EntryValue":false},{"CharacteristicId":"6010101","Name":"Downstream","ValueId":"601010129","Value":"60 MB","EntryValue":false}]}]},"BillingSupplementaryOffer":{"Id":"34619894","Name":"10.00","Until":"","Legacy":{"Id":"34619894","Name":"10.00"}},"Price":"50000,00","Discount":"5000,00","Currency":"COP","BundleProductOfferingId":"","SerialNumber":"","BillPlanTypeId":"502","BillPlanType":"Postpaid","BusinessAreaId":"601","BusinessArea":"Home","MarketSegmentId":"701","MarketSegment":"B2C","StatusId":"301","Status":"Active","FromDate":"2017-12-09","Specifications":[],"AssetCharacteristics":[],"Accounts":["1431523990","1431523990","CC|3525709","15026191"],"Equipment":["8001237"]}]}],"Equipments":[{"Id":"8001237","SourceId":"11","SourceName":"MSS","TypeId":"1201","Type":"CPE","Manufacturer":"ARRIS","ManufacturerDate":"","ModelId":"1902","Model":"MTA","Reference":"TG2482","InternationalIdentityOne":"2C9569B1A21A","InternationalIdentityTwo":"2C9569B1A21B","SerialNumber":"87P2NB112103350","ProviderSerialNumber":"","Assets":["1-2GUVU511W"],"EquipmentCharacteristics":[]}],"time":"184 ms"};

var referencia_especial = ['TG2482','TG2483'];


var tecnologia = respuesta_ws.Products[0].Assets[0].MediaType;
console.log("tecnologia: "+tecnologia);

var marca = respuesta_ws.Equipments[0].Manufacturer
console.log("marca: "+marca);

var referencia = respuesta_ws.Equipments[0].Reference
console.log("referencia: "+referencia);

if(respuesta_ws.Products[0].Assets[0].MediaType == 'HFC'){
  var mac = respuesta_ws.Equipments[0].InternationalIdentityOne
  console.log("mac: "+mac);
};
if (respuesta_ws.Products[0].Assets[0].MediaType == 'Copper'){
  var serial = respuesta_ws.Equipments[0].SerialNumber
  console.log("serial: "+serial);
}

