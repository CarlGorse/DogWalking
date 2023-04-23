using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(BookingTimeslotId))]
    public class BookingTimeslot
    {
        public int BookingTimeslotId { get; set; }
        public int BookingId { get; set; }
        public int TimeslotId { get; set; }

        [JsonIgnore]
        public Timeslot Timeslot { get; set; } = null!;
        public Booking Booking { get; set; } = null!;
        [JsonProperty("bookingTimeslots")]
        public ICollection<BookingTimeslot> BookingTimeslots { get; set; } = new List<BookingTimeslot>();
    }
}
