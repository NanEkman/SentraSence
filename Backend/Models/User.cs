namespace SentraSence.Api.Models;

public class User
{
    public Guid UserId { get; set; }

    public string Email { get; set; } = null!;
    public string? Name { get; set; }
    public string? Phone { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    // Navigation
    public ICollection<TrustedContact> TrustedContacts { get; set; } = new List<TrustedContact>();
    public ICollection<AudioClip> AudioClips { get; set; } = new List<AudioClip>();
    public ICollection<AlarmEvent> AlarmEvents { get; set; } = new List<AlarmEvent>();
}