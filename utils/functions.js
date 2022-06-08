import { useState, useEffect } from "react"

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const getTimeDelivery = (openHours) => {
  const today = new Date(),
          curHours = (today.getHours() < 10 ? '0':'') + today.getHours(),
          curMinutes = (today.getMinutes() < 10 ? '0':'') + today.getMinutes(),
          curTime = `${curHours}:${curMinutes}`,
          deliveryHours = ((today.getHours()) < 10 ? '0':'') + (today.getHours()),
          // deliveryHours = ((today.getHours() + 2) < 10 ? '0':'') + (today.getHours() + 2),
          startDeliveryTime = `${deliveryHours}:${curMinutes}`,
          openCloseHours = openHours.split('-'),
          openTime = openCloseHours[0],
          closeTime = openCloseHours[1],
          deliveryTimeLoop = ((parseInt(closeTime.split(':')[0]) - 1) - startDeliveryTime.split(':')[0]) * 4,
          interval = 15,
          deliveryTimeArr = [],
          startTime = parseInt(startDeliveryTime.split(':')[0])

    if (startDeliveryTime > openTime) {
      let newHour = 0
      let min = 0
      for (let index = 0; index < deliveryTimeLoop; index++) {
        let hour = startTime
        var minutes = (min%60)
        if (minutes == 0) {
          if (newHour != 0) {
            newHour = newHour + 1
          } else {
            newHour = hour + 1
          }
        }

        deliveryTimeArr[index] = ("0" + ((newHour != 0 ? newHour : hour) % 24)).slice(-2) + ':' + ("0" + minutes).slice(-2);
        min = parseInt(minutes) + interval
      }

      for (let index = 0; index < deliveryTimeArr.length; index += 2) {
        deliveryTimeArr[index] = deliveryTimeArr.slice(index, index + 2)
      }

      try {
        for (let index = 0; index < deliveryTimeArr.length; index += 1) {
          if (index % 2 != 0) {
            if (index != deliveryTimeArr.length) {
              let secondArr = deliveryTimeArr.slice(index, index + 2)[1]
              if (Array.isArray(secondArr)) {
                deliveryTimeArr[index] = deliveryTimeArr[index].concat(',')
                deliveryTimeArr[index] = deliveryTimeArr[index].concat(secondArr[0])
                deliveryTimeArr[index] = deliveryTimeArr[index].split(',')
              }
            }
          }
        }

        for (let index = 0; index < deliveryTimeArr.length; index++) {
          if (!Array.isArray(deliveryTimeArr[index])) {
            deliveryTimeArr = deliveryTimeArr.splice(0, index)
          }
        }
      } catch (error) {
        console.log(error)
      }

      return deliveryTimeArr ? deliveryTimeArr : [];
    }

    return []
}

const getDateDelivery = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        monthLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const today = new Date(),
        deliveryDateArr = []
  
  for (let index = 0; index < 2; index++) {

    const newDate = new Date(today.setDate(today.getDate() + 1)),
          dateName = days[newDate.getDay()],
          monthName = month[newDate.getMonth()]

    deliveryDateArr[index] = `${dateName}, ${newDate.getDate()} ${monthName.toLowerCase()}`
  }

  return deliveryDateArr;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      window.addEventListener("resize", handleResize);
     
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export {
    classNames,
    getTimeDelivery,
    getDateDelivery,
    useWindowSize
}