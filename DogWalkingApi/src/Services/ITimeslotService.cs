namespace DogWalkingApi.Services
{
    public interface ITimeslotService
    {
        IReadOnlyCollection<Timeslot> Get(DateOnly date);
        void BookTimeslots(int bookingId, IReadOnlyCollection<int> timeslotIds);
    }
}