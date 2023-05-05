using System.Runtime.Serialization;

namespace DogWalkingApi.Enums
{

    public enum TimeslotStatus
    {
        [EnumMember(Value = "Not set")]
        NotSet = 0,
        [EnumMember(Value = "Not bookable")]
        NotBookable = 1,
        [EnumMember(Value = "Booked")]
        Booked = 2,
        [EnumMember(Value = "Bookable")]
        Bookable = 3
    }
}
