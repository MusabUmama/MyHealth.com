function imageViewer(image) {
    var bigImage = document.getElementById("BigImage");
    bigImage.src = image.src;
    bigImage.parentElement.style.display = "block"; 

  }


function textViewer(image) {

  var d1 = ("The deadliest disease in the world is coronary artery disease (CAD). Also called ischemic heart disease, CAD occurs when the blood vessels that supply blood to the heart become narrowed. Untreated CAD can lead to chest pain, heart failure, and arrhythmias.");
  var d2 = ("A stroke occurs when an artery in your brain is blocked or leaks. This causes the oxygen-deprived brain cells to begin dying within minutes. During a stroke, you feel sudden numbness and confusion or have trouble walking and seeing. If left untreated, a stroke can cause long-term disability.");
  var d3 = ("Viruses usually cause lower respiratory infections. They can also be caused by bacteria. Coughing is the main symptom of a lower respiratory infection. You may also feel breathlessness, wheezing, and a tight feeling in your chest. Untreated lower respiratory infections can lead to breathing failure and death.");
  var d4 = ("Chronic obstructive pulmonary disease (COPD) is a long-term, progressive lung disease that makes breathing difficult. Chronic bronchitis and emphysema are types of COPD. In 2004, about 64 million peopleTrusted Source around the world were living with COPD.");
  var d5 = ("Respiratory cancers include cancers of the trachea, larynx, bronchus, and lungs. The main causes are smoking, secondhand smoke, and environmental toxins. But household pollutions such as fuels and mold also contribute.");
  
  var text = document.getElementById("text");


  if (image.getAttribute('src') === "1.jpg") {
  
    text.innerHTML = d1;

  } else if (image.getAttribute('src') === "2.jpg") {

    text.innerHTML = d2;

  } else if (image.getAttribute('src') === "3.jpg") {

    text.innerHTML = d3;
    
  } else if (image.getAttribute('src') === "4.jpg") {

    text.innerHTML = d4;
    
  } else {

    text.innerHTML = d5;

  }    

}
