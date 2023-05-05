using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace DogWalkingApi.Types
{
    [PrimaryKey(nameof(BookingId))]
    public class Booking
    {
        [JsonProperty("id")]
        public int BookingId { get; set; }

        [JsonIgnore]
        public IEnumerable<BookingTimeslot> BookingTimeslots { get; set; } = null!;

        [JsonProperty("location")]
        [JsonConverter(typeof(StringEnumConverter), typeof(CamelCaseNamingStrategy))]
        public Locations Location { get; set; }

        [JsonProperty("date")]
        public DateOnly Date { get { return GetEarliestTimeslot().Date; } }

        [JsonProperty("startTime")]
        public TimeOnly StartTime { get { return GetEarliestTimeslot().StartTime; } }

        [JsonProperty("endTime")]
        public TimeOnly EndTime { get { return GetLatestTimeslot().EndTime; } }

        [JsonProperty("duration")]
        public int DurationMins => (EndTime - StartTime).Minutes;

        private Timeslot GetEarliestTimeslot()
        {
            return Timeslots.OrderBy(x => x.Date).ThenBy(x => x.StartTime).First();
        }

        private Timeslot GetLatestTimeslot()
        {
            return Timeslots.OrderBy(x => x.Date).ThenBy(x => x.StartTime).Last();
        }

        private IEnumerable<Timeslot> Timeslots => BookingTimeslots.Select(x => x.Timeslot);
    }
}
