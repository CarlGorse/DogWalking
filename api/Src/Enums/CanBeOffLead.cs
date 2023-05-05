using System.Runtime.Serialization;

namespace DogWalkingApi.Enums
{

    public enum CanBeOffLead
    {
        [EnumMember(Value = "No")]
        No,
        [EnumMember(Value = "Countryside only")]
        CountrysideOnly,
        [EnumMember(Value = "Park only")]
        ParkOnly,
        [EnumMember(Value = "Either")]
        Either
    }
}
