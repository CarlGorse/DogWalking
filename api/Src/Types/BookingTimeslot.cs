﻿using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(BookingId), nameof(TimeslotId))]
    public class BookingTimeslot
    {
        public int BookingId { get; set; }
        public int TimeslotId { get; set; }

        [JsonIgnore]
        public Timeslot Timeslot { get; set; } = null!;

        [JsonProperty("booking")]
        public Booking Booking { get; set; } = null!;
    }
}
