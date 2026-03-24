export function PageTutorialBanner(props: any) {
  return null;
}

export function GuidedOnboardingCard(props: any) {
  return null;
}

export function OnboardingCompanyStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">Configure sua empresa</p>
      <button onClick={onNext} className="px-4 py-2 bg-primary text-primary-foreground rounded">
        Continuar
      </button>
    </div>
  );
}
