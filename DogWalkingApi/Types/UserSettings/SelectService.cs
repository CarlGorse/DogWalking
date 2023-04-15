using System.ComponentModel.DataAnnotations;

namespace DogWalkingApi.Types.UserSettings
{
    public class SelectService
    {
        [Key]
        public int SelectServiceId { get; set; }
        public TypesOfWalk TypeOfWalk;
    }
}
