using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types.UserSettingsSubclasses
{
    public class SelectService
    {
        [Key]
        public int SelectServiceId { get; set; }
        public TypesOfWalk TypeOfWalk;
    }
}
