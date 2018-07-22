'use strict';

exports.addNew = function(collection, body){
  return new Promise(function(resolve, reject) {
    var data = new collection(body);  
  	console.log(data);
  	data.save( function(err, res){
  	  if (err) {
  		  console.log('Fail to save with error : ' + err);
        reject();
  	  } else {
        resolve(body);
        console.log( 'Successfull save data' );        
  	  }		  				
  	});	
  });	
}

exports.deleteData = function(collection) {
  return new Promise(function(resolve, reject) {
    collection.deleteMany( {}, (err, result)=>{
      if (err) {
        console.log('Fail to delete of list');                
        reject();
      } else {        
        resolve();        
        console.log('Successfull to delete of list');        
      }
    });
  });	
}

exports.deleteDataById = function(collection, id) {
  return new Promise(function(resolve, reject) {
    collection.findByIdAndDelete( id, (err, docs)=>{
      if (err) {
        console.log('Fail to delete');        
        reject();
      } else {
        resolve();        
        console.log('Successfull to delete');        
      }
    });
  });	
}

exports.getData = function(collection) {
  return new Promise(function(resolve, reject) {
    collection.find( {}, null, (err, docs)=> {
      if (err) {
        reject();
      } else {
        resolve(docs);        
      }
    } );
  });	
}

exports.getDataById = function(collection, id) {
  return new Promise(function(resolve, reject) {
    collection.findById( id, (err, docs)=> {
      if (err) {
        console.log('Fail get id')              
        reject();
      } else {
        resolve(docs);  
        console.log('Successfull get id')              
      }
    } );    
  });	
}

exports.updateDataById = function(collection, id, body) {
  return new Promise(function(resolve, reject) {
    collection.findByIdAndUpdate( id, {$set:body}, {new: true, upsert:false}, (err, docs)=>{
      if (err) {
        console.log('Fail to update');
        reject();
      } else {
        resolve(docs);              
        console.log('Successfull to update');
      }
    });
  });	
}