using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.Services
{

    public class TimeslotService : ITimeslotService
    {

        private readonly IBookingTimeslotRepository _BookingTimeslotRepository;
        private readonly ITimeslotRepository _TimeslotRepository;

        public TimeslotService(ITimeslotRepository timeslotRepository, IBookingTimeslotRepository bookingTimeslotRepository)
        {
            _TimeslotRepository = timeslotRepository;
            _BookingTimeslotRepository = bookingTimeslotRepository;
        }

        public IReadOnlyCollection<Timeslot> Get(DateOnly date)
        {
            return _TimeslotRepository
                .GetByDate(date)
                .OrderBy(x => x.Date)
                .ThenBy(x => x.StartTime)
                .ToList()
                .AsReadOnly();
        }

        public void BookTimeslots(Booking booking, IReadOnlyCollection<int> timeslotIds)
        {
            var timeslots = _TimeslotRepository.Timeslots()
                .Where(x => timeslotIds.Contains(x.TimeslotId));

            foreach (var timeslot in timeslots)
            {
                _BookingTimeslotRepository.Add(booking, timeslot.TimeslotId);
            }
        }
    }
}
