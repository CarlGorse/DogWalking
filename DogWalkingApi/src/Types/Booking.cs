using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(BookingId))]
    public class Booking
    {
        public int BookingId { get; set; }
        [NotMapped]
        public ICollection<int> TimeslotIds { get; set; } = null!;
        [NotMapped]
        public ICollection<Timeslot> Timeslots { get; set; } = null!;
        public Locations Location { get; set; }
    }
}
