namespace DogWalkingApi.Repositories
{
    public interface IBookingTimeslotRepository
    {
        void Add(BookingTimeslot bookingtimeslot);
        void Add(Booking booking, int timeslotId);
    }
}