function sourse  ( name, url ) {
  var request = new XMLHttpRequest ()
  request.onreadystatechange = function () {
    if ( this.readyState === 4 ) {
      if ( this.status === 200 ){
        var newArray = JSON.parse ( this.responseText )
        var divo = document.body.appendChild  (document.createElement ("div"))
        divo.className = "gallery"
        var h2 = divo.appendChild (document.createElement("h2"))
        h2.innerText = name.toUpperCase ()
        h2.style.marginBottom = "30px";
        h2.style.textAlign = "center";
        newArray.forEach ( function (value) {
          var div4ik = divo.appendChild  (document.createElement ("div"))
          var pic = div4ik.appendChild  (document.createElement ("img"))
          div4ik.className = value.classN
          pic.src = value.ref
          pic.title = value.title
          var pe = div4ik.appendChild (document.createElement("p"))
          pe.innerText = value.title
          pic.ondblclick = function (event) {
            event.target.parentNode.remove(event.target)
            //if(div4ik.indexOf(pic) === -1) this.div4ik.parentNode.remove(event.target)
          }
        })
      } 
    }
  }
request.open ( "GET", url)
request.send ()
}
  var  Gallery = function (name = "Название галереи", url = "url документа") {
    var addPicture =  (function () {
      return sourse(name,url)
    })()
  }
  
  var sity = new Gallery ("sity", "sity.json")
  var pic = new Gallery ("cars", "cars.json")

