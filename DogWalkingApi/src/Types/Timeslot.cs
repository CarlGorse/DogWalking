using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(TimeslotId))]
    public class Timeslot
    {
        public int TimeslotId { get; }

        public DateOnly Date { get; set; }

        public TimeOnly StartTime { get; set; }

        public TimeOnly EndTime { get; set; }

        public TimeslotStatus Status;

        public int BookingId { get; set; }
        public Booking? Booking { get; set; }

        public int DurationMins
        {
            get
            {
                return (EndTime - StartTime).Minutes;
            }
        }
    }
}
