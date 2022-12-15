package druid

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
)

func (druid *Druid) registerBarkskinCD() {
	actionId := core.ActionID{SpellID: 22812}

	setBonus := core.TernaryDuration(druid.HasSetBonus(ItemSetDreamwalkerBattlegear, 4), time.Second*3.0, 0.0)

	druid.BarkskinAura = druid.RegisterAura(core.Aura{
		Label:    "Barkskin",
		ActionID: actionId,
		Duration: (time.Second * 12) + setBonus,
		OnGain: func(aura *core.Aura, sim *core.Simulation) {
			druid.PseudoStats.DamageTakenMultiplier *= 0.8
		},
		OnExpire: func(aura *core.Aura, sim *core.Simulation) {
			druid.PseudoStats.DamageTakenMultiplier /= 0.8
		},
	})

	druid.Barkskin = druid.RegisterSpell(core.SpellConfig{
		ActionID: actionId,
		Cast: core.CastConfig{
			CD: core.Cooldown{
				Timer:    druid.NewTimer(),
				Duration: time.Second * 60.0,
			},
		},
		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			druid.BarkskinAura.Activate(sim)
			druid.AutoAttacks.StopMeleeUntil(sim, sim.CurrentTime)
		},
	})

	druid.AddMajorCooldown(core.MajorCooldown{
		Spell: druid.Barkskin,
		Type:  core.CooldownTypeSurvival,
	})

}
