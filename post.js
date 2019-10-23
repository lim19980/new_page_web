const phantom = require('phantom');
console.log("got here");




(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    //console.info('Requesting', requestData.url);
    
    if(!requestData){
    
     page.render('Init.jpeg', {format: 'jpeg', quality: '10'});
  
    
    }
    
  });

  const status = await page.open('arthritis.org/giving/donate.php');
  const content = await page.property('content');
  
  
  
  page.open('http://www.google.com', function() {
    setTimeout(function() {
        page.render('google.png');
        phantom.exit();
    }, 200);
});
  
  
  
   

  
  await page.render('Final.jpeg', {format: 'jpeg', quality:'100'});
  var title = await page.evaluate(function() {
    return document.title;
  });
  console.log(page.url+" / "+ s +" / ");
  await instance.exit();
})();



