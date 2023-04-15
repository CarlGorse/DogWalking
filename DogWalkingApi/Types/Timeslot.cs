using DogWalkingApi.Enums;
using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.Types {

    [PrimaryKey(nameof(TimeslotId))]
    public class Timeslot {

        public int TimeslotId { get; }

        //[JsonConverter(typeof(DateOnlyJsonConverter))]
        public DateOnly Date { get; set; }
        //[JsonConverter(typeof(TimeOnlyJsonConverter))]
        public TimeOnly StartTime { get; set; }
        //[JsonConverter(typeof(TimeOnlyJsonConverter))]
        public TimeOnly EndTime { get; set; }
        public TimeslotStatus Status;
        public Booking? Booking { get; set; }
    }
}
