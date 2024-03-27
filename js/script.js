let icon = document.querySelector('.icon')
let headerMenu = document.querySelector('.header__menu')
icon.addEventListener('click', function () {
  icon.classList.toggle('active')
  headerMenu.classList.toggle('active')
})

let data = fetch('../data.json')
console.log(data)
data
  // .then((response) => {
  //   return response.json()
  // })
  // .then((dataFromJSON) => {
  //   console.log(dataFromJSON)
  //   if (window.location.pathname === '/space2/destinations/moon.html' || window.location.pathname === '/space2/destinations/mars.html' || window.location.pathname === '/space2/destinations/europa.html' || window.location.pathname === '/space2/destinations/titan.html') {
  //     let innerText = document.querySelector('.inner__text')
  //     let planetsDistance = document.querySelector('.planets__distance')
  //     let planetsTravel = document.querySelector('.planets__travel')
  //     let innerLeft = document.querySelector('.inner__left')

  //     let planetPic = document.createElement('img')
  //     planetPic.classList.add('planets__inner-left')
  //     let headerOfPlanetNames = document.createElement("div")
  //     headerOfPlanetNames.classList.add('planets__text')
  //     let planetsKm = document.createElement("div")
  //     planetsKm.classList.add('planets__km')
  //     let planetsDays = document.createElement("div")
  //     planetsDays.classList.add('planets__days')
  //     let planetsParh = document.createElement('p')
  //     planetsParh.classList.add('planets__abz')


  //     for (let index = 0; index < 4; index++) {
  //       let planetsMenuItems = document.querySelector('.planets__menu-items')
  //       let planetsMenuItem = document.createElement('li')
  //       let planetsMenuItemLink = document.createElement('a')
  //       planetsMenuItem.classList.add('planets__menu-item')
  //       planetsMenuItems.appendChild(planetsMenuItem)
  //       planetsMenuItem.appendChild(planetsMenuItemLink)

  //     }
  //     let aLink = document.querySelectorAll('.planets__menu-item a')
  //     let ArrOfItems = document.querySelectorAll('.planets__menu-item')
  //     aLink[0].innerHTML = dataFromJSON.destinations[0].name
  //     aLink[1].innerHTML = dataFromJSON.destinations[1].name
  //     aLink[2].innerHTML = dataFromJSON.destinations[2].name
  //     aLink[3].innerHTML = dataFromJSON.destinations[3].name
  //     if (window.location.pathname === `/space2/destinations/moon.html`) {
  //       planetPic.src = dataFromJSON.destinations[0].images.png
  //       planetPic.src = dataFromJSON.destinations[0].images.webp
  //       ArrOfItems[0].classList.toggle('active')
  //       headerOfPlanetNames.innerHTML = dataFromJSON.destinations[0].name
  //       planetsParh.innerHTML = dataFromJSON.destinations[0].description
  //       planetsKm.innerHTML = dataFromJSON.destinations[0].distance
  //       planetsDays.innerHTML = dataFromJSON.destinations[0].travel
  //       aLink[0].href = '#'
  //       aLink[1].href = 'mars.html'
  //       aLink[2].href = 'europa.html'
  //       aLink[3].href = 'titan.html'
  //     }
  //     if (window.location.pathname === `/space2/destinations/mars.html`) {
  //       planetPic.src = dataFromJSON.destinations[1].images.png
  //       planetPic.src = dataFromJSON.destinations[1].images.webp
  //       ArrOfItems[1].classList.toggle('active')
  //       headerOfPlanetNames.innerHTML = dataFromJSON.destinations[1].name
  //       planetsParh.innerHTML = dataFromJSON.destinations[1].description
  //       planetsKm.innerHTML = dataFromJSON.destinations[1].distance
  //       planetsDays.innerHTML = dataFromJSON.destinations[1].travel
  //       aLink[0].href = 'moon.html'
  //       aLink[1].href = '#'
  //       aLink[2].href = 'europa.html'
  //       aLink[3].href = 'titan.html'
  //     }
  //     if (window.location.pathname === `/space2/destinations/europa.html`) {
  //       planetPic.src = dataFromJSON.destinations[2].images.png
  //       planetPic.src = dataFromJSON.destinations[2].images.webp
  //       ArrOfItems[2].classList.toggle('active')
  //       headerOfPlanetNames.innerHTML = dataFromJSON.destinations[2].name
  //       planetsParh.innerHTML = dataFromJSON.destinations[2].description
  //       planetsKm.innerHTML = dataFromJSON.destinations[2].distance
  //       planetsDays.innerHTML = dataFromJSON.destinations[2].travel
  //       aLink[0].href = 'moon.html'
  //       aLink[1].href = 'mars.html'
  //       aLink[2].href = '#'
  //       aLink[3].href = 'titan.html'
  //     }
  //     if (window.location.pathname === `/space2/destinations/titan.html`) {
  //       planetPic.src = dataFromJSON.destinations[3].images.png
  //       planetPic.src = dataFromJSON.destinations[3].images.webp
  //       ArrOfItems[3].classList.toggle('active')
  //       headerOfPlanetNames.innerHTML = dataFromJSON.destinations[3].name
  //       planetsParh.innerHTML = dataFromJSON.destinations[3].description
  //       planetsKm.innerHTML = dataFromJSON.destinations[3].distance
  //       planetsDays.innerHTML = dataFromJSON.destinations[3].travel
  //       aLink[0].href = 'moon.html'
  //       aLink[1].href = 'mars.html'
  //       aLink[2].href = 'europa.html'
  //       aLink[3].href = '#'
  //     }
  //     innerText.appendChild(headerOfPlanetNames)
  //     innerText.appendChild(planetsParh)
  //     planetsDistance.appendChild(planetsKm)
  //     planetsTravel.appendChild(planetsDays)
  //     innerLeft.appendChild(planetPic)
  //   }

  //   if (window.location.pathname === `/space2/crew/hurley.html` || window.location.pathname === `/space2/crew/shuttleworth.html` || window.location.pathname === `/space2/crew/glover.html` || window.location.pathname === `/space2/crew/ansari.html`) {
  //     let crewLeftBlock = document.querySelector('.crew__left-block')
  //     let crewClass = document.createElement('div')
  //     crewClass.classList.add('crew__class')
  //     crewLeftBlock.appendChild(crewClass)
  //     let crewName = document.createElement('div')
  //     crewName.classList.add('crew__name')
  //     crewLeftBlock.appendChild(crewName)
  //     let crewParh = document.createElement('div')
  //     crewParh.classList.add('crew__abz')
  //     crewLeftBlock.appendChild(crewParh)
  //     let crewInnerPhoto = document.querySelector('.crew__inner-photo')
  //     let innerPhoto = document.createElement('img')
  //     innerPhoto.classList.add('crew__inner-right')
  //     crewInnerPhoto.appendChild(innerPhoto)
  //     if (window.location.pathname === `/space2/crew/hurley.html`) {
  //       crewClass.innerHTML = dataFromJSON.crew[0].role
  //       crewName.innerHTML = dataFromJSON.crew[0].name
  //       crewParh.innerHTML = dataFromJSON.crew[0].bio
  //       innerPhoto.src = dataFromJSON.crew[0].images.png
  //       innerPhoto.src = dataFromJSON.crew[0].images.webp
  //     }
  //     if (window.location.pathname === `/space2/crew/shuttleworth.html`) {
  //       crewClass.innerHTML = dataFromJSON.crew[1].role
  //       crewName.innerHTML = dataFromJSON.crew[1].name
  //       crewParh.innerHTML = dataFromJSON.crew[1].bio
  //       innerPhoto.src = dataFromJSON.crew[1].images.png
  //       innerPhoto.src = dataFromJSON.crew[1].images.webp
  //     }
  //     if (window.location.pathname === `/space2/crew/glover.html`) {
  //       crewClass.innerHTML = dataFromJSON.crew[2].role
  //       crewName.innerHTML = dataFromJSON.crew[2].name
  //       crewParh.innerHTML = dataFromJSON.crew[2].bio
  //       innerPhoto.src = dataFromJSON.crew[2].images.png
  //       innerPhoto.src = dataFromJSON.crew[2].images.webp
  //     }
  //     if (window.location.pathname === `/space2/crew/ansari.html`) {
  //       crewClass.innerHTML = dataFromJSON.crew[3].role
  //       crewName.innerHTML = dataFromJSON.crew[3].name
  //       crewParh.innerHTML = dataFromJSON.crew[3].bio
  //       innerPhoto.src = dataFromJSON.crew[3].images.png
  //       innerPhoto.src = dataFromJSON.crew[3].images.webp
  //     }
  //   }

  //   let launchInner = document.querySelector('.launch__inner')
  //   let launchTextBlock = document.querySelector('.launch__text-block')
  //   let launchName = document.createElement('div')
  //   launchName.classList.add('launch__name')
  //   launchTextBlock.appendChild(launchName)
  //   let launchParh = document.createElement('div')
  //   launchParh.classList.add('launch__abz')
  //   launchTextBlock.appendChild(launchParh)
  //   let launchImg = document.createElement('img')
  //   launchImg.classList.add('launch__inner-right')
  //   launchInner.appendChild(launchImg)
  //   if(window.location.pathname === "/space2/technology/vehicle.html"){
  //     launchName.innerHTML = dataFromJSON.technology[0].name
  //     launchParh.innerHTML = dataFromJSON.technology[0].description
  //     launchImg.src = dataFromJSON.technology[0].images.portrait
  //   }
  //   if(window.location.pathname === "/space2/technology/spaceport.html"){
  //     launchName.innerHTML = dataFromJSON.technology[1].name
  //     launchParh.innerHTML = dataFromJSON.technology[1].description
  //     launchImg.src = dataFromJSON.technology[1].images.portrait
  //   }
  //   if(window.location.pathname === "/space2/technology/capsule.html"){
  //     launchName.innerHTML = dataFromJSON.technology[2].name
  //     launchParh.innerHTML = dataFromJSON.technology[2].description
  //     launchImg.src = dataFromJSON.technology[2].images.portrait
  //   }
  // })
  .then((response) => {
    return response.json()
  })
  .then((dataFromJSON) => {
    console.log(dataFromJSON)
    if (window.location.pathname === '/space2/destinations/moon.html' || window.location.pathname === '/space2/destinations/mars.html' || window.location.pathname === '/space2/destinations/europa.html' || window.location.pathname === '/space2/destinations/titan.html') {
      let innerText = document.querySelector('.inner__text')
      let planetsDistance = document.querySelector('.planets__distance')
      let planetsTravel = document.querySelector('.planets__travel')
      let innerLeft = document.querySelector('.inner__left')

      let planetPic = document.createElement('img')
      planetPic.classList.add('planets__inner-left')
      let headerOfPlanetNames = document.createElement("div")
      headerOfPlanetNames.classList.add('planets__text')
      let planetsKm = document.createElement("div")
      planetsKm.classList.add('planets__km')
      let planetsDays = document.createElement("div")
      planetsDays.classList.add('planets__days')
      let planetsParh = document.createElement('p')
      planetsParh.classList.add('planets__abz')


      for (let index = 0; index < 4; index++) {
        let planetsMenuItems = document.querySelector('.planets__menu-items')
        let planetsMenuItem = document.createElement('li')
        let planetsMenuItemLink = document.createElement('a')
        planetsMenuItem.classList.add('planets__menu-item')
        planetsMenuItems.appendChild(planetsMenuItem)
        planetsMenuItem.appendChild(planetsMenuItemLink)

      }
      let aLink = document.querySelectorAll('.planets__menu-item a')
      let ArrOfItems = document.querySelectorAll('.planets__menu-item')
      aLink[0].innerHTML = dataFromJSON.destinations[0].name
      aLink[1].innerHTML = dataFromJSON.destinations[1].name
      aLink[2].innerHTML = dataFromJSON.destinations[2].name
      aLink[3].innerHTML = dataFromJSON.destinations[3].name
      if (window.location.pathname === `/space2/destinations/moon.html`) {
        planetPic.src = dataFromJSON.destinations[0].images.png
        planetPic.src = dataFromJSON.destinations[0].images.webp
        ArrOfItems[0].classList.toggle('active')
        headerOfPlanetNames.innerHTML = dataFromJSON.destinations[0].name
        planetsParh.innerHTML = dataFromJSON.destinations[0].description
        planetsKm.innerHTML = dataFromJSON.destinations[0].distance
        planetsDays.innerHTML = dataFromJSON.destinations[0].travel
        aLink[0].href = '#'
        aLink[1].href = 'mars.html'
        aLink[2].href = 'europa.html'
        aLink[3].href = 'titan.html'
      }
      if (window.location.pathname === `/space2/destinations/mars.html`) {
        planetPic.src = dataFromJSON.destinations[1].images.png
        planetPic.src = dataFromJSON.destinations[1].images.webp
        ArrOfItems[1].classList.toggle('active')
        headerOfPlanetNames.innerHTML = dataFromJSON.destinations[1].name
        planetsParh.innerHTML = dataFromJSON.destinations[1].description
        planetsKm.innerHTML = dataFromJSON.destinations[1].distance
        planetsDays.innerHTML = dataFromJSON.destinations[1].travel
        aLink[0].href = 'moon.html'
        aLink[1].href = '#'
        aLink[2].href = 'europa.html'
        aLink[3].href = 'titan.html'
      }
      if (window.location.pathname === `/space2/destinations/europa.html`) {
        planetPic.src = dataFromJSON.destinations[2].images.png
        planetPic.src = dataFromJSON.destinations[2].images.webp
        ArrOfItems[2].classList.toggle('active')
        headerOfPlanetNames.innerHTML = dataFromJSON.destinations[2].name
        planetsParh.innerHTML = dataFromJSON.destinations[2].description
        planetsKm.innerHTML = dataFromJSON.destinations[2].distance
        planetsDays.innerHTML = dataFromJSON.destinations[2].travel
        aLink[0].href = 'moon.html'
        aLink[1].href = 'mars.html'
        aLink[2].href = '#'
        aLink[3].href = 'titan.html'
      }
      if (window.location.pathname === `/space2/destinations/titan.html`) {
        planetPic.src = dataFromJSON.destinations[3].images.png
        planetPic.src = dataFromJSON.destinations[3].images.webp
        ArrOfItems[3].classList.toggle('active')
        headerOfPlanetNames.innerHTML = dataFromJSON.destinations[3].name
        planetsParh.innerHTML = dataFromJSON.destinations[3].description
        planetsKm.innerHTML = dataFromJSON.destinations[3].distance
        planetsDays.innerHTML = dataFromJSON.destinations[3].travel
        aLink[0].href = 'moon.html'
        aLink[1].href = 'mars.html'
        aLink[2].href = 'europa.html'
        aLink[3].href = '#'
      }
      innerText.appendChild(headerOfPlanetNames)
      innerText.appendChild(planetsParh)
      planetsDistance.appendChild(planetsKm)
      planetsTravel.appendChild(planetsDays)
      innerLeft.appendChild(planetPic)
    }

    if (window.location.pathname === `/space2/crew/hurley.html` || window.location.pathname === `/space2/crew/shuttleworth.html` || window.location.pathname === `/space2/crew/glover.html` || window.location.pathname === `/space2/crew/ansari.html`) {
      let crewLeftBlock = document.querySelector('.crew__left-block')
      let crewClass = document.createElement('div')
      crewClass.classList.add('crew__class')
      crewLeftBlock.appendChild(crewClass)
      let crewName = document.createElement('div')
      crewName.classList.add('crew__name')
      crewLeftBlock.appendChild(crewName)
      let crewParh = document.createElement('div')
      crewParh.classList.add('crew__abz')
      crewLeftBlock.appendChild(crewParh)
      let crewInnerPhoto = document.querySelector('.crew__inner-photo')
      let innerPhoto = document.createElement('img')
      innerPhoto.classList.add('crew__inner-right')
      crewInnerPhoto.appendChild(innerPhoto)
      if (window.location.pathname === `/space2/crew/hurley.html`) {
        crewClass.innerHTML = dataFromJSON.crew[0].role
        crewName.innerHTML = dataFromJSON.crew[0].name
        crewParh.innerHTML = dataFromJSON.crew[0].bio
        innerPhoto.src = dataFromJSON.crew[0].images.png
        innerPhoto.src = dataFromJSON.crew[0].images.webp
      }
      if (window.location.pathname === `/space2/crew/shuttleworth.html`) {
        crewClass.innerHTML = dataFromJSON.crew[1].role
        crewName.innerHTML = dataFromJSON.crew[1].name
        crewParh.innerHTML = dataFromJSON.crew[1].bio
        innerPhoto.src = dataFromJSON.crew[1].images.png
        innerPhoto.src = dataFromJSON.crew[1].images.webp
      }
      if (window.location.pathname === `/space2/crew/glover.html`) {
        crewClass.innerHTML = dataFromJSON.crew[2].role
        crewName.innerHTML = dataFromJSON.crew[2].name
        crewParh.innerHTML = dataFromJSON.crew[2].bio
        innerPhoto.src = dataFromJSON.crew[2].images.png
        innerPhoto.src = dataFromJSON.crew[2].images.webp
      }
      if (window.location.pathname === `/space2/crew/ansari.html`) {
        crewClass.innerHTML = dataFromJSON.crew[3].role
        crewName.innerHTML = dataFromJSON.crew[3].name
        crewParh.innerHTML = dataFromJSON.crew[3].bio
        innerPhoto.src = dataFromJSON.crew[3].images.png
        innerPhoto.src = dataFromJSON.crew[3].images.webp
      }
    }

    let launchInner = document.querySelector('.launch__inner')
    let launchTextBlock = document.querySelector('.launch__text-block')
    let launchName = document.createElement('div')
    launchName.classList.add('launch__name')
    launchTextBlock.appendChild(launchName)
    let launchParh = document.createElement('div')
    launchParh.classList.add('launch__abz')
    launchTextBlock.appendChild(launchParh)
    let launchImg = document.createElement('img')
    launchImg.classList.add('launch__inner-right')
    launchInner.appendChild(launchImg)
    if(window.location.pathname === "/space2/technology/vehicle.html"){
      launchName.innerHTML = dataFromJSON.technology[0].name
      launchParh.innerHTML = dataFromJSON.technology[0].description
      launchImg.src = dataFromJSON.technology[0].images.portrait
    }
    if(window.location.pathname === "/space2/technology/spaceport.html"){
      launchName.innerHTML = dataFromJSON.technology[1].name
      launchParh.innerHTML = dataFromJSON.technology[1].description
      launchImg.src = dataFromJSON.technology[1].images.portrait
    }
    if(window.location.pathname === "/space2/technology/capsule.html"){
      launchName.innerHTML = dataFromJSON.technology[2].name
      launchParh.innerHTML = dataFromJSON.technology[2].description
      launchImg.src = dataFromJSON.technology[2].images.portrait
    }
  })