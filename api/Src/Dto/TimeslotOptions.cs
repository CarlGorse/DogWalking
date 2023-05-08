namespace DogWalkingApi.Dto
{
    public class TimeslotOptions
    {
        public string StartTime { get; set; } = null!;
        public string EndTime { get; set; } = null!;
        public TimeOnly StartTimeActual => TimeOnly.Parse(StartTime);
        public TimeOnly EndTimeActual => TimeOnly.Parse(EndTime);
    }
}
