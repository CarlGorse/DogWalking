﻿using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(TimeslotId))]
    public class Timeslot
    {
        private readonly TimeslotStatus? _timeslotStatus;

        [JsonProperty("id")]
        public int TimeslotId { get; }

        [JsonProperty("date")]
        public DateOnly Date { get; set; }

        [JsonProperty("startTime")]
        public TimeOnly StartTime { get; set; }

        [JsonProperty("endTime")]
        public TimeOnly EndTime { get; set; }

        [JsonProperty("overrideStatus")]
        public TimeslotStatus? OverrideStatus { get; set; }

        [JsonProperty("status")]
        [JsonConverter(typeof(StringEnumConverter), typeof(CamelCaseNamingStrategy))]
        public TimeslotStatus Status => OverrideStatus != null ? (TimeslotStatus)OverrideStatus : (HasBooking ? TimeslotStatus.NotBookable : TimeslotStatus.Bookable);

        [JsonProperty("bookingTimeslot")]
        public BookingTimeslot BookingTimeslot { get; set; }

        [JsonProperty("booking")]
        public Booking Booking => BookingTimeslot?.Booking;

        [JsonProperty("duration")]
        public int DurationMins => (EndTime - StartTime).Minutes;

        [JsonProperty("hasBooking")]
        public bool HasBooking => BookingTimeslot != null;
    }
}