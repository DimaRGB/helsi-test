// parking.enter = (parkingId, car) => {
//   car.type = 'sedan' || 'disabled' || 'truck';
//
// };
//
// parking.leave = (parkingId, car) => {
//
// };


class ParkingSystem {

  getParkings() {
    return JSON.parse(localStorage.getItem('parkings')) || [];
  }

  getEmptySeats(number) {
    const seats = new Array(number);
    return seats.fill(false);
  }

  addParking(name, sedanSeatsNumber, disabledSeatsNumber, truckSeatsNumber) {
    const parkings = this.getParkings();
    parkings.push({
      id: parkings.length,
      name,
      sedanSeats: this.getEmptySeats(sedanSeatsNumber),
      disabledSeats: this.getEmptySeats(disabledSeatsNumber),
      truckSeats: this.getEmptySeats(truckSeatsNumber),
    });
    localStorage.setItem('parkings', JSON.stringify(parkings));
  };
}

const parkingSystem = new ParkingSystem();

if (!parkingSystem.getParkings().length) {
  parkingSystem.addParking('parking A', 15, 5, 10);
  parkingSystem.addParking('parking B', 10, 10, 5)
}

export default parkingSystem;
