using DogWalkingApi.Types;

namespace DogWalkingApi.Repositories {
    public interface ITimeslotRepository {
        IQueryable<Timeslot> Get();
    }
}