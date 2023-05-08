namespace DogWalkingApi.Services
{
    public interface ITimeslotService
    {
        IReadOnlyCollection<Timeslot> Get(DateOnly date);
        void BookTimeslots(Booking booking, DateOnly date, IReadOnlyCollection<TimeslotTimes> timeslotTimes);
    }
}