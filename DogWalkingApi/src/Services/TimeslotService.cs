namespace DogWalkingApi.Services
{

    public class TimeslotService : ITimeslotService
    {

        private readonly ITimeslotRepository _TimeslotRepository;

        public TimeslotService(ITimeslotRepository timeslotRepository)
        {
            _TimeslotRepository = timeslotRepository;
        }

        public IReadOnlyCollection<Timeslot> Get(DateOnly date)
        {
            return _TimeslotRepository
                .Get()
                .Where(x => x.Date == date)
                .ToList()
                .AsReadOnly();
        }
    }
}
