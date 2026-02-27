namespace SentraSence.Api.Models;

public class AiAnalysis
{
    public Guid AnalysisId { get; set; }

    public Guid AudioId { get; set; }
    public AudioClip AudioClip { get; set; } = null!;

    public string ModelName { get; set; } = null!;
    public string? ModelVersion { get; set; }

    public string SoundCategory { get; set; } = null!;

    public double ConfidenceScore { get; set; }
    public double AlertThreshold { get; set; }

    public int InferenceMs { get; set; }

    public DateTime AnalyzedAt { get; set; }

    public string? RawOutputJson { get; set; }
}