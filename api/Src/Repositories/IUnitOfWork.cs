namespace DogWalkingApi.Repositories
{
    public interface IUnitOfWork
    {
        int SaveChanges();
        public IBookingRepository BookingRepository { get; }
        public ITimeslotRepository TimeslotRepository { get; }
    }
}