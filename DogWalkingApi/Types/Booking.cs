using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.Types {

    [PrimaryKey(nameof(BookingId))]
    public class Booking {

        public int BookingId { get; set; }
        public int TimeslotId { get; set; }
        public Locations Location { get; set; }
    }
}
