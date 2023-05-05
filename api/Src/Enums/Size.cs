using System.Runtime.Serialization;

namespace DogWalkingApi.Enums
{
    public enum Size
    {
        [EnumMember(Value = "Toy")]
        Toy,
        [EnumMember(Value = "Small")]
        Small,
        [EnumMember(Value = "Medium")]
        Medium,
        [EnumMember(Value = "Large")]
        Large
    }
}
