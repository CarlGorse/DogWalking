namespace DogWalkingApi.Repositories
{
    public interface ITimeslotRepository
    {
        IEnumerable<Timeslot> GetByDate(DateOnly date);
        IEnumerable<Timeslot> GetByIds(IReadOnlyCollection<int> timeslotIds);
        void BookTimeslots(IReadOnlyCollection<int> timeslotIds, Booking booking);
    }
}