namespace DogWalkingApi.Repositories
{
    public interface ITimeslotRepository
    {
        int SaveChanges();

        void Create(Timeslot timeslot);
        IEnumerable<Timeslot> GetByDate(DateOnly date);
        IEnumerable<Timeslot> GetByIds(IReadOnlyCollection<int> timeslotIds);
        IQueryable<Timeslot> Timeslots();
    }
}