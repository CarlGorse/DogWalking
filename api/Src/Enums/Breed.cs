using System.Runtime.Serialization;

namespace DogWalkingApi.Enums
{
    public enum Breed
    {
        [EnumMember(Value = "Cockapoo")]
        Cockapoo,
        [EnumMember(Value = "CockerSpaniel")]
        CockerSpaniel,
        [EnumMember(Value = "KingCharles")]
        KingCharles,
        [EnumMember(Value = "Labrador")]
        Labrador,
        [EnumMember(Value = "Other")]
        Other
    }
}
