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

        [JsonProperty("status")]
        [JsonConverter(typeof(StringEnumConverter), typeof(CamelCaseNamingStrategy))]
        public TimeslotStatus Status;

        [JsonProperty("bookingTimeslots")]
        public ICollection<BookingTimeslot> BookingTimeslots { get; set; } = new List<BookingTimeslot>();

        [JsonProperty("duration")]
        public int DurationMins => (EndTime - StartTime).Minutes;

        [JsonProperty("hasBookings")]
        public bool HasBookings => BookingTimeslots.Any();
    }
}
