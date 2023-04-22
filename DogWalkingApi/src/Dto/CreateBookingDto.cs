namespace DogWalkingApi.Dto
{
    public class CreateBookingDto
    {
        public Locations Location { get; set; }

        public int[] TimeslotIds { get; set; } = null!;
    }
}

