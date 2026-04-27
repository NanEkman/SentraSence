namespace SentraSence.Api.Models;

public class AudioClip
{
    public Guid AudioId { get; set; }

    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    public Guid? AlarmId { get; set; }
    public AlarmEvent? AlarmEvent { get; set; }

    public string StorageUrl { get; set; } = null!;
    public double DurationMs { get; set; }

    public DateTime RecordedAt { get; set; }

    public string? DeviceId { get; set; }
    public long? FileSizeBytes { get; set; }

    // Relations
    public ICollection<AiAnalysis> Analyses { get; set; } = new List<AiAnalysis>();
}