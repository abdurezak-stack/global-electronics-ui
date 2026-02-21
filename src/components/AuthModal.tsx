import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Check your email for the confirmation link!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Logged in successfully!');
        onClose();
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>{isSignUp ? 'Create Account' : 'Sign In'}</DialogTitle>
          <DialogDescription>
            {isSignUp ? 'Join EXPRESS for the best experience' : 'Enter your email and password to sign in'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAuth} className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black font-semibold" disabled={loading}>
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </Button>
        </form>
        <div className="text-center text-sm">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsSignUp(false)} className="text-blue-600 hover:underline">
                Sign In
              </button>
            </p>
          ) : (
            <p>
              New to EXPRESS?{' '}
              <button onClick={() => setIsSignUp(true)} className="text-blue-600 hover:underline">
                Create account
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};