namespace DogWalkingApi.Repositories
{
    public interface IBookingTimeslotRepository
    {
        void Add(BookingTimeslot bookingtimeslot);
        void Add(int bookingId, int timeslotId);
    }
}