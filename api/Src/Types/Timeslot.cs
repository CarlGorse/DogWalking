using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(TimeslotId))]
    public class Timeslot
    {

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
        public TimeslotStatus Status => OverrideStatus != null ? (TimeslotStatus)OverrideStatus : (Booking != null ? TimeslotStatus.Booked : TimeslotStatus.Bookable);

        [JsonProperty("statusDescription")]
        [JsonConverter(typeof(StringEnumConverter), typeof(CamelCaseNamingStrategy))]
        public TimeslotStatus StatusDescription => Status;

        [JsonProperty("bookingTimeslot")]
        public BookingTimeslot BookingTimeslot { get; set; } = null!;

        [JsonProperty("booking")]
        public Booking? Booking => BookingTimeslot?.Booking;

        [JsonProperty("duration")]
        public int DurationMins => (EndTime - StartTime).Minutes;

        [JsonProperty("isBooked")]
        public bool IsBooked => Status == TimeslotStatus.Booked;
        [JsonProperty("isBookable")]
        public bool IsBookable => Status == TimeslotStatus.Bookable;
    }
}
