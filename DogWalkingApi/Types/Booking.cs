using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types
{
    public class Booking
    {
        [Key]
        public int BookingId { get; set; }
        public ICollection<int> TimeslotIds { get; set; } = null!;
        public ICollection<Timeslot> Timeslots { get; set; } = null!;
        public Locations Location { get; set; }
    }
}
