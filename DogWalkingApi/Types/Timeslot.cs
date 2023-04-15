using DogWalkingApi.Enums;

namespace DogWalkingApi.Types {

    public class Timeslot {

        public int Id { get; set; }
        public DateOnly Date { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public TimeslotStatus Status;
    }
}
