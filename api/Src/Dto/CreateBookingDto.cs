namespace DogWalkingApi.Dto
{
    public class CreateBookingDto
    {
        public Locations Location { get; set; }

        public DateOnly Date { get; set; }
        public TimeslotTimes[] TimeslotTimes { get; set; } = null!;
    }
}

