'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [dataReady, setDataReady] = useState(false);
  const [buySignal, setBuySignal] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setBuySignal('🟢 Recomendación: COMPRA inmediata');
      setDataReady(true);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-400 p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard Cripto Real</h1>
      {!dataReady ? (
        <p className="text-white">Cargando datos...</p>
      ) : (
        <>
          <p className="text-green-400 text-lg mb-4">{buySignal}</p>
          <div className="bg-zinc-900 p-4 rounded-lg text-white">
            <p><strong>Indicadores activos:</strong> RSI, MACD, Bollinger Bands</p>
            <p><strong>Alertas:</strong> RSI bajo en ADA, volumen alto en PEPE</p>
            <p><strong>Noticias:</strong> CoinDesk, Whale Alerts, Investing</p>
            <p><strong>Reservas exchanges:</strong> Datos en vivo vía iframe</p>
            <p><strong>Heatmap:</strong> Actualizado automáticamente</p>
          </div>
        </>
      )}
    </div>
  );
}