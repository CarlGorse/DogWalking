﻿using DogWalkingApi.Types;

namespace DogWalkingApi.Services {
    public interface ITimeslotService {
        IReadOnlyCollection<Timeslot> Get(DateOnly date);
    }
}