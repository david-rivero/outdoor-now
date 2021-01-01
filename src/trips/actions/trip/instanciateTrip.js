export default function instanciateTrip () {
  return {
    type: 'INSTANCIATE_TRIP',
    payload: {
      trip: {
        "name": "",
        "pictTrip": "",
        "locationOrigin": {
          "name": "",
          "coords": null
        },
        "locationDestination": {
          "name": "",
          "coords": null
        },
        "datetime": null,
        "timeDuration": 0,
        "checkpoints": [],
        "members": []
      }
    }
  }
}
