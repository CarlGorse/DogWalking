using System.Runtime.Serialization;

namespace DogWalkingApi.Enums
{
    public enum Locations
    {
        [EnumMember(Value = "Bristol")]
        Bristol,
        [EnumMember(Value = "Midsomer Norton")]
        MidsomerNorton,
        [EnumMember(Value = "Paulton")]
        Paulton
    }
}
